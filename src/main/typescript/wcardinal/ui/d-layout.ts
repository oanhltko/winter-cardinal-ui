/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DCornerMask } from "./d-corner";
import { DLayoutClearType } from "./d-layout-clear-type";
import { DLayoutSpace, DLayoutSpaceOptions } from "./d-layout-space";
import { utilIsNumber } from "./util/util-is-number";
import { utilIsString } from "./util/util-is-string";

export enum DLayoutDirection {
	VERTICAL,
	HORIZONTAL
}

export interface DLayoutMargin {
	horizontal: number;
	vertical: number;
}

export interface DLayoutOptions<THEME extends DThemeLayout> extends DBaseOptions<THEME> {
	margin?: number | { horizontal?: number, vertical?: number };
	corner?: number | {
		radius?: number;
		mask?: DCornerMask;
		adjust?: boolean
	};
	row?: number;
	column?: number;
	direction?: (keyof typeof DLayoutDirection) | DLayoutDirection;
}

export interface DThemeLayout extends DThemeBase {
	getMargin(): number;
	getDirection(): DLayoutDirection;
	getCornerAdjust(): boolean;
	getMultiplicity(): number;
}

const isDBaseVisible = ( child: DisplayObject ): child is DBase => {
	return child instanceof DBase && (child.visible || child instanceof DLayoutSpace);
};

const toMultiplicity = <THEME extends DThemeLayout>( theme: THEME, options?: DLayoutOptions<THEME> ): number => {
	if( options ) {
		if( options.row != null ) {
			return options.row;
		}
		if( options.column != null ) {
			return options.column;
		}
	}
	return theme.getMultiplicity();
};

const toMargin = <THEME extends DThemeLayout>( theme: THEME, options?: DLayoutOptions<THEME> ): DLayoutMargin => {
	if( options && options.margin != null ) {
		const margin = options.margin;
		if( utilIsNumber( margin ) ) {
			return {
				horizontal: margin,
				vertical: margin
			};
		} else {
			const themeMargin = theme.getMargin();
			return {
				horizontal: ( margin.horizontal != null ? margin.horizontal : themeMargin ),
				vertical: ( margin.vertical != null ? margin.vertical : themeMargin )
			};
		}
	} else {
		const themeMargin = theme.getMargin();
		return {
			horizontal: themeMargin,
			vertical: themeMargin
		};
	}
};

const toDirection = <THEME extends DThemeLayout>( theme: THEME, options?: DLayoutOptions<THEME> ): DLayoutDirection => {
	if( options && options.direction != null ) {
		const direction = options.direction;
		if( utilIsString( direction ) ) {
			return DLayoutDirection[ direction ];
		} else {
			return direction;
		}
	}
	return theme.getDirection();
};

const toCornerAdjust = <THEME extends DThemeLayout>( theme: THEME, options?: DLayoutOptions<THEME> ): boolean => {
	if( options && options.corner != null && ! utilIsNumber( options.corner ) && options.corner.adjust != null ) {
		return options.corner.adjust;
	}
	return theme.getCornerAdjust();
};

export abstract class DLayout<
	THEME extends DThemeLayout,
	OPTIONS extends DLayoutOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	static CORNER_ADJUST_WORK: Float32Array | null = null;

	protected _margin: DLayoutMargin;
	protected _cornerAdjust: boolean;
	protected _multiplicity: number;
	protected _direction: DLayoutDirection;

	constructor( options?: OPTIONS ) {
		super( options );

		this.setState( DBaseState.UNFOCUSABLE, true );

		const theme = this.theme;
		this._margin = toMargin( theme, options );
		this._direction = toDirection( theme, options );
		this._cornerAdjust = toCornerAdjust( theme, options );
		this._multiplicity = toMultiplicity( theme, options );
	}

	protected getWeightTotal() {
		const children = this.children;
		let result = 0;
		const multiplicity = this._multiplicity;
		for( let i = 0, imax = children.length; i < imax; ) {
			let weight = -1;
			let j = 0;
			for( ; j < multiplicity && i + j < imax; ++j ) {
				const child = children[ i + j ];
				if( isDBaseVisible( child ) ) {
					const clearType = child.getClearType();
					if( j !== 0 && (clearType & DLayoutClearType.BEFORE) ) {
						break;
					} else {
						weight = Math.max( weight, child.weight );
						if( clearType && DLayoutClearType.AFTER ) {
							j += 1;
							break;
						}
					}
				} else {
					i += 1;
					j -= 1;
				}
			}
			i += j;
			if( 0 <= weight ) {
				result += weight;
			}
		}
		return result;
	}

	protected getSpaceLeft( baseSize: number, margin: number ) {
		const children = this.children;
		const multiplicity = this._multiplicity;
		if( this._direction === DLayoutDirection.VERTICAL ) {
			let result = baseSize;
			let marginNext = 0;
			for( let i = 0, imax = children.length; i < imax; ) {
				let height = 0;
				let weight = -1;
				let j = 0;
				for( ; j < multiplicity && i + j < imax; ++j ) {
					const child = children[ i + j ];
					if( isDBaseVisible( child ) ) {
						const clearType = child.getClearType();
						if( j !== 0 && (clearType & DLayoutClearType.BEFORE) ) {
							break;
						} else {
							weight = Math.max( weight, child.weight );
							if( weight < 0 ) {
								height = Math.max( height, child.height + marginNext );
							} else {
								height = marginNext;
							}
							if( clearType & DLayoutClearType.AFTER ) {
								j += 1;
								break;
							}
						}
					} else {
						i += 1;
						j -= 1;
					}
				}
				i += j;
				result -= height;
				marginNext = margin;
			}
			return Math.max( 0, result );
		} else {
			let result = baseSize;
			let marginNext = 0;
			for( let i = 0, imax = children.length; i < imax; ) {
				let width = 0;
				let weight = -1;
				let j = 0;
				for( ; j < multiplicity && i + j < imax; ++j ) {
					const child = children[ i + j ];
					if( isDBaseVisible( child ) ) {
						const clearType = child.getClearType();
						if( j !== 0 && (clearType & DLayoutClearType.BEFORE) ) {
							break;
						} else {
							weight = Math.max( weight, child.weight );
							if( weight < 0 ) {
								width = Math.max( width, child.width + marginNext );
							} else {
								width = marginNext;
							}
							if( clearType & DLayoutClearType.AFTER ) {
								j += 1;
								break;
							}
						}
					} else {
						i += 1;
						j -= 1;
					}
				}
				i += j;
				result -= width;
				marginNext = margin;
			}
			return Math.max( 0, result );
		}
	}

	protected onRefit(): void {
		const children = this.children;
		const padding = this._padding;
		const paddingTop = padding.getTop();
		const paddingBottom = padding.getBottom();
		const paddingLeft = padding.getLeft();
		const paddingRight = padding.getRight();
		const margin = this._margin;
		const marginVertical = margin.vertical;
		const marginHorizontal = margin.horizontal;
		const weightTotal = this.getWeightTotal();
		const multiplicity = this._multiplicity;

		let cornerAdjustWork = null;
		if( this._cornerAdjust ) {
			const requiredSize = 4 + ( children.length << 1 );
			if( DLayout.CORNER_ADJUST_WORK == null || DLayout.CORNER_ADJUST_WORK.length < requiredSize ) {
				DLayout.CORNER_ADJUST_WORK = new Float32Array( requiredSize );
			}
			cornerAdjustWork = DLayout.CORNER_ADJUST_WORK;
			cornerAdjustWork[ 0 ] = -2;
			cornerAdjustWork[ 1 ] = -2;
			cornerAdjustWork[ requiredSize - 2 ] = -3;
			cornerAdjustWork[ requiredSize - 1 ] = -3;
		}

		if( this._direction === DLayoutDirection.VERTICAL ) {
			let irow = 0;
			let y = paddingTop - marginVertical;
			if( 0 < weightTotal ) {
				const weightTotalInverse = 1 / weightTotal;
				const baseSize = this.height - paddingTop - paddingBottom;
				const spaceLeft = this.getSpaceLeft( baseSize, marginVertical );
				for( let i = 0, imax = children.length; i < imax; ) {
					let x = paddingLeft - marginHorizontal;
					let height = 0;
					let j = 0;
					for( ; j < multiplicity && i + j < imax; ++j ) {
						const child = children[ i + j ];
						if( isDBaseVisible( child ) ) {
							const clearType = child.getClearType();
							if( j !== 0 && (clearType & DLayoutClearType.BEFORE) ) {
								break;
							} else {
								child.position.set( marginHorizontal + x, marginVertical + y );
								const weight = child.weight;
								if( 0 <= weight ) {
									child.height = spaceLeft * ( weight * weightTotalInverse );
								}
								x += marginHorizontal + child.width;
								height = Math.max( height, child.height );
								if( clearType & DLayoutClearType.AFTER ) {
									if( cornerAdjustWork != null ) {
										const k = (i + j + 1) << 1;
										cornerAdjustWork[ k + 0 ] = j;
										cornerAdjustWork[ k + 1 ] = irow;
									}
									j += 1;
									break;
								} else {
									if( cornerAdjustWork != null ) {
										const k = (i + j + 1) << 1;
										cornerAdjustWork[ k + 0 ] = j;
										cornerAdjustWork[ k + 1 ] = irow;
									}
								}
							}
						} else {
							if( cornerAdjustWork != null ) {
								const k = (i + j + 1) << 1;
								cornerAdjustWork[ k + 0 ] = j - 1;
								cornerAdjustWork[ k + 1 ] = irow;
							}
							i += 1;
							j -= 1;
						}
					}
					y += marginVertical + height;
					i += j;
					irow += 1;
				}

				if( cornerAdjustWork != null ) {
					for( let i = 0, imax = children.length; i < imax; ++i ) {
						const child = children[ i ];
						if( isDBaseVisible( child ) ) {
							const i1 = 2 + ( i << 1 );
							const icolumn1 = cornerAdjustWork[ i1 + 0 ];
							const irow1 = cornerAdjustWork[ i1 + 1 ];
							const clearType = child.getClearType();

							let icolumn0 = -2;
							if( ! (clearType & DLayoutClearType.BEFORE) ) {
								const i0 = this.findRowIndexPrevious( i1, irow1, cornerAdjustWork );
								if( ! this.hasClearTypeAfter( children, i0 ) ) {
									icolumn0 = cornerAdjustWork[ i0 ];
								}
							}

							let icolumn2 = -2;
							if( ! (clearType & DLayoutClearType.AFTER) ) {
								const i2 = this.findRowIndexNext( i1, irow1, cornerAdjustWork );
								if( ! this.hasClearTypeBefore( children, i2 ) ) {
									icolumn2 = cornerAdjustWork[ i2 ];
								}
							}

							const ncolumn = this.countColumn( i1, irow1, cornerAdjustWork );
							child.corner.mask = this.toCornerMaskColumn( icolumn0, icolumn1, icolumn2, ncolumn );
						}
					}
				}
			} else {
				for( let i = 0, imax = children.length; i < imax; ) {
					let x = paddingLeft - marginHorizontal;
					let height = 0;
					let j = 0;
					for( ; j < multiplicity && i + j < imax; ++j ) {
						const child = children[ i + j ];
						if( isDBaseVisible( child ) ) {
							const clearType = child.getClearType();
							if( j !== 0 && (clearType & DLayoutClearType.BEFORE) ) {
								break;
							} else {
								child.position.set( marginHorizontal + x, marginVertical + y );
								const weight = child.weight;
								if( 0 <= weight ) {
									child.height = 0;
								}
								x += marginHorizontal + child.width;
								height = Math.max( height, child.height );
								if( clearType & DLayoutClearType.AFTER ) {
									if( cornerAdjustWork != null ) {
										const k = (i + j + 1) << 1;
										cornerAdjustWork[ k + 0 ] = j;
										cornerAdjustWork[ k + 1 ] = irow;
									}
									j += 1;
									break;
								} else {
									if( cornerAdjustWork != null ) {
										const k = (i + j + 1) << 1;
										cornerAdjustWork[ k + 0 ] = j;
										cornerAdjustWork[ k + 1 ] = irow;
									}
								}
							}
						} else {
							if( cornerAdjustWork != null ) {
								const k = (i + j + 1) << 1;
								cornerAdjustWork[ k + 0 ] = j - 1;
								cornerAdjustWork[ k + 1 ] = irow;
							}
							i += 1;
							j -= 1;
						}
					}
					y += marginVertical + height;
					i += j;
					irow += 1;
				}

				if( cornerAdjustWork != null ) {
					for( let i = 0, imax = children.length; i < imax; ++i ) {
						const child = children[ i ];
						if( isDBaseVisible( child ) ) {
							const i1 = 2 + ( i << 1 );
							const icolumn1 = cornerAdjustWork[ i1 + 0 ];
							const irow1 = cornerAdjustWork[ i1 + 1 ];
							const clearType = child.getClearType();

							let icolumn0 = -2;
							if( ! (clearType & DLayoutClearType.BEFORE) ) {
								const i0 = this.findRowIndexPrevious( i1, irow1, cornerAdjustWork );
								if( ! this.hasClearTypeAfter( children, i0 ) ) {
									icolumn0 = cornerAdjustWork[ i0 ];
								}
							}

							let icolumn2 = -2;
							if( ! (clearType & DLayoutClearType.AFTER) ) {
								const i2 = this.findRowIndexNext( i1, irow1, cornerAdjustWork );
								if( ! this.hasClearTypeBefore( children, i2 ) ) {
									icolumn2 = cornerAdjustWork[ i2 ];
								}
							}

							const ncolumn = this.countColumn( i1, irow1, cornerAdjustWork );
							child.corner.mask = this.toCornerMaskColumn( icolumn0, icolumn1, icolumn2, ncolumn );
						}
					}
				}
			}
		} else {
			let icolumn = 0;
			let x = paddingLeft - marginHorizontal;
			if( 0 < weightTotal ) {
				const weightTotalInverse = 1 / weightTotal;
				const baseSize = this.width - paddingLeft - paddingRight;
				const spaceLeft = this.getSpaceLeft( baseSize, marginHorizontal );
				for( let i = 0, imax = children.length; i < imax; ) {
					let y = paddingTop - marginVertical;
					let width = 0;
					let j = 0;
					for( ; j < multiplicity && i + j < imax; ++j ) {
						const child = children[ i + j ];
						if( isDBaseVisible( child ) ) {
							const clearType = child.getClearType();
							if( j !== 0 && (clearType & DLayoutClearType.BEFORE) ) {
								break;
							} else {
								child.position.set( marginHorizontal + x, marginVertical + y );
								const weight = child.weight;
								if( 0 <= weight ) {
									child.width = spaceLeft * ( weight * weightTotalInverse );
								}
								width = Math.max( width, child.width );
								y += marginVertical + child.height;
								if( clearType & DLayoutClearType.AFTER ) {
									if( cornerAdjustWork != null ) {
										const k = (i + j + 1) << 1;
										cornerAdjustWork[ k + 0 ] = icolumn;
										cornerAdjustWork[ k + 1 ] = j;
									}
									j += 1;
									break;
								} else {
									if( cornerAdjustWork != null ) {
										const k = (i + j + 1) << 1;
										cornerAdjustWork[ k + 0 ] = icolumn;
										cornerAdjustWork[ k + 1 ] = j;
									}
								}
							}
						} else {
							if( cornerAdjustWork != null ) {
								const k = (i + j + 1) << 1;
								cornerAdjustWork[ k + 0 ] = icolumn;
								cornerAdjustWork[ k + 1 ] = j - 1;
							}
							i += 1;
							j -= 1;
						}
					}
					x += marginHorizontal + width;
					i += j;
					icolumn += 1;
				}

				if( cornerAdjustWork != null ) {
					for( let i = 0, imax = children.length; i < imax; ++i ) {
						const child = children[ i ];
						if( isDBaseVisible( child ) ) {
							const i1 = 2 + ( i << 1 );
							const icolumn1 = cornerAdjustWork[ i1 + 0 ];
							const irow1 = cornerAdjustWork[ i1 + 1 ];
							const clearType = child.getClearType();

							let irow0 = -2;
							if( ! (clearType & DLayoutClearType.BEFORE) ) {
								const i0 = this.findColumnIndexPrevious( i1, icolumn1, cornerAdjustWork );
								if( ! this.hasClearTypeAfter( children, i0 ) ) {
									irow0 = cornerAdjustWork[ i0 + 1 ];
								}
							}

							let irow2 = -2;
							if( ! (clearType & DLayoutClearType.AFTER) ) {
								const i2 = this.findColumnIndexNext( i1, icolumn1, cornerAdjustWork );
								if( ! this.hasClearTypeBefore( children, i2 ) ) {
									irow2 = cornerAdjustWork[ i2 + 1 ];
								}
							}

							const nrow = this.countRow( i1, icolumn1, cornerAdjustWork );
							child.corner.mask = this.toCornerMaskRow( irow0, irow1, irow2, nrow );
						}
					}
				}
			} else {
				for( let i = 0, imax = children.length; i < imax; ) {
					let y = paddingTop - marginVertical;
					let width = 0;
					let j = 0;
					for( ; j < multiplicity && i + j < imax; ++j ) {
						const child = children[ i + j ];
						if( isDBaseVisible( child ) ) {
							const clearType = child.getClearType();
							if( j !== 0 && (clearType & DLayoutClearType.BEFORE) ) {
								break;
							} else {
								child.position.set( marginHorizontal + x, marginVertical + y );
								const weight = child.weight;
								if( 0 <= weight ) {
									child.width = 0;
								}
								width = Math.max( width, child.width );
								y += marginVertical + child.height;
								if( clearType & DLayoutClearType.AFTER ) {
									if( cornerAdjustWork != null ) {
										const k = (i + j + 1) << 1;
										cornerAdjustWork[ k + 0 ] = icolumn;
										cornerAdjustWork[ k + 1 ] = j;
									}
									j += 1;
									break;
								} else {
									if( cornerAdjustWork != null ) {
										const k = (i + j + 1) << 1;
										cornerAdjustWork[ k + 0 ] = icolumn;
										cornerAdjustWork[ k + 1 ] = j;
									}
								}
							}
						} else {
							if( cornerAdjustWork != null ) {
								const k = (i + j + 1) << 1;
								cornerAdjustWork[ k + 0 ] = icolumn;
								cornerAdjustWork[ k + 1 ] = j - 1;
							}
							i += 1;
							j -= 1;
						}
					}
					x += marginHorizontal + width;
					i += j;
					icolumn += 1;
				}

				if( cornerAdjustWork != null ) {
					for( let i = 0, imax = children.length; i < imax; ++i ) {
						const child = children[ i ];
						if( isDBaseVisible( child ) ) {
							const i1 = 2 + ( i << 1 );
							const icolumn1 = cornerAdjustWork[ i1 + 0 ];
							const irow1 = cornerAdjustWork[ i1 + 1 ];
							const clearType = child.getClearType();

							let irow0 = -2;
							if( ! (clearType & DLayoutClearType.BEFORE) ) {
								const i0 = this.findColumnIndexPrevious( i1, icolumn1, cornerAdjustWork );
								if( ! this.hasClearTypeAfter( children, i0 ) ) {
									irow0 = cornerAdjustWork[ i0 + 1 ];
								}
							}

							let irow2 = -2;
							if( ! (clearType & DLayoutClearType.AFTER) ) {
								const i2 = this.findColumnIndexNext( i1, icolumn1, cornerAdjustWork );
								if( ! this.hasClearTypeBefore( children, i2 ) ) {
									irow2 = cornerAdjustWork[ i2 + 1 ];
								}
							}

							const nrow = this.countRow( i1, icolumn1, cornerAdjustWork );
							child.corner.mask = this.toCornerMaskRow( irow0, irow1, irow2, nrow );
						}
					}
				}
			}
		}

		super.onRefit();
	}

	protected hasClearTypeBefore( children: DisplayObject[], index: number ): boolean {
		return this.hasClearType( children, index, DLayoutClearType.BEFORE );
	}

	protected hasClearTypeAfter( children: DisplayObject[], index: number ): boolean {
		return this.hasClearType( children, index, DLayoutClearType.AFTER );
	}

	protected hasClearType( children: DisplayObject[], index: number, clearType: DLayoutClearType ): boolean {
		if( 2 <= index ) {
			const i = (index - 2) >> 1;
			if( 0 <= i && i < children.length ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					return !!( child.getClearType() & clearType );
				}
			}
		}
		return false;
	}

	protected findColumnIndexPrevious( istart: number, icolumn: number, cornerAdjustWork: Float32Array ): number {
		for( let i = istart - 2; 0 <= i; i -= 2 ) {
			if( cornerAdjustWork[ i ] !== icolumn ) {
				return i;
			}
		}
		return 0;
	}

	protected findColumnIndexNext( istart: number, icolumn: number, cornerAdjustWork: Float32Array ): number {
		for( let i = istart + 2, imax = cornerAdjustWork.length; i < imax; i += 2 ) {
			const icolumn2 = cornerAdjustWork[ i ];
			if( icolumn2 !== icolumn ) {
				for( let j = i + 2; j < imax; j += 2 ) {
					if( cornerAdjustWork[ j ] !== icolumn2 ) {
						return j - 2;
					}
				}
				return i;
			}
		}
		return cornerAdjustWork.length - 2;
	}

	protected countRow( istart: number, icolumn: number, cornerAdjustWork: Float32Array ): number {
		for( let i = istart + 2, imax = cornerAdjustWork.length; i < imax; i += 2 ) {
			const icolumn2 = cornerAdjustWork[ i ];
			if( icolumn2 !== icolumn ) {
				return cornerAdjustWork[ i - 2 + 1 ] + 1;
			}
		}
		return 0;
	}

	protected findRowIndexPrevious( istart: number, irow: number, cornerAdjustWork: Float32Array ): number {
		for( let i = istart - 2; 0 <= i; i -= 2 ) {
			if( cornerAdjustWork[ i + 1 ] !== irow ) {
				return i;
			}
		}
		return 0;
	}

	protected findRowIndexNext( istart: number, irow: number, cornerAdjustWork: Float32Array ): number {
		for( let i = istart + 2, imax = cornerAdjustWork.length; i < imax; i += 2 ) {
			const irow2 = cornerAdjustWork[ i + 1 ];
			if( irow2 !== irow ) {
				for( let j = i + 2; j < imax; j += 2 ) {
					if( cornerAdjustWork[ j + 1 ] !== irow2 ) {
						return j - 2;
					}
				}
				return i;
			}
		}
		return cornerAdjustWork.length - 2;
	}

	protected countColumn( istart: number, irow: number, cornerAdjustWork: Float32Array ): number {
		for( let i = istart + 2, imax = cornerAdjustWork.length; i < imax; i += 2 ) {
			const irow2 = cornerAdjustWork[ i + 1 ];
			if( irow2 !== irow ) {
				return cornerAdjustWork[ i - 2 + 0 ] + 1;
			}
		}
		return 0;
	}

	protected toCornerMaskColumn( i0: number, i1: number, i2: number, n: number ): DCornerMask {
		let result = DCornerMask.NONE;
		if( i0 + 1 < i1 && i1 === 0 ) {
			result |= DCornerMask.TOP_LEFT;
		}
		if( i2 + 1 < i1 && i1 === 0 ) {
			result |= DCornerMask.BOTTOM_LEFT;
		}
		if( i0 < i1 && i1 + 1 === n ) {
			result |= DCornerMask.TOP_RIGHT;
		}
		if( i2 < i1 && i1 + 1 === n ) {
			result |= DCornerMask.BOTTOM_RIGHT;
		}
		return DCornerMask.ALL & (~result);
	}

	protected toCornerMaskRow( i0: number, i1: number, i2: number, n: number ): DCornerMask {
		let result = DCornerMask.NONE;
		if( i0 + 1 < i1 && i1 === 0 ) {
			result |= DCornerMask.TOP_LEFT;
		}
		if( i2 + 1 < i1 && i1 === 0 ) {
			result |= DCornerMask.TOP_RIGHT;
		}
		if( i0 < i1 && i1 + 1 === n ) {
			result |= DCornerMask.BOTTOM_LEFT;
		}
		if( i2 < i1 && i1 + 1 === n ) {
			result |= DCornerMask.BOTTOM_RIGHT;
		}
		return DCornerMask.ALL & (~result);
	}

	addSpace( options?: DLayoutSpaceOptions ) {
		return this.addChild( new DLayoutSpace( options ) );
	}

	protected getType(): string {
		return "DLayout";
	}
}
