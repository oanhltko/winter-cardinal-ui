import { DDiagramCanvasTagMap } from "./d-diagram-canvas-tag-map";
import { EShapeTagValueRangeType } from "./shape/e-shape-tag-value-range";

export interface DDiagramTagCanvas {
	tags: DDiagramCanvasTagMap;
}

export interface DDiagramTagDiagram {
	canvas: DDiagramTagCanvas | null;
}

export class DDiagramTag {
	protected _diagram: DDiagramTagDiagram;

	constructor( diagram: DDiagramTagDiagram ) {
		this._diagram = diagram;
	}

	update(): void {
		// DO NOTHING
	}

	getIds(): string[] {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			return Object.keys( canvas.tags );
		}
		return [];
	}

	each( callback: ( tagId: string ) => (boolean | void) ): string | null {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tags = canvas.tags;
			for( const id in tags ) {
				if( callback( id ) === false ) {
					return id;
				}
			}
		}
		return null;
	}

	set( id: string, value: unknown, time?: number, from?: number | null, to?: number | null ): void {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tagValues = canvas.tags[ id ];
			if( tagValues != null ) {
				for( let i = 0, imax = tagValues.length; i < imax; ++i ) {
					const tagValue = tagValues[ i ];
					const range = tagValue.range;

					// Range
					range.set( from, to );

					// Time
					if( time !== undefined ) {
						tagValue.time = time;
					}

					// Value
					tagValue.value = value;
				}
			}
		}
	}

	clear( id: string ): void {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tagValues = canvas.tags[ id ];
			if( tagValues != null ) {
				for( let i = 0, imax = tagValues.length; i < imax; ++i ) {
					tagValues[ i ].clear();
				}
			}
		}
	}

	setAll( id: string, values: unknown[], times?: number[], from?: number | null, to?: number | null ): void {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tagValues = canvas.tags[ id ];
			if( tagValues != null ) {
				for( let i = 0, imax = tagValues.length; i < imax; ++i ) {
					const tagValue = tagValues[ i ];
					const range = tagValue.range;

					// Range
					range.set( from, to );

					// Time
					if( times !== undefined ) {
						tagValue.times = times;
					}

					// Value
					tagValue.values = values;
				}
			}
		}
	}

	setValue( id: string, value: unknown, time?: number ): void {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tagValues = canvas.tags[ id ];
			if( tagValues != null ) {
				for( let i = 0, imax = tagValues.length; i < imax; ++i ) {
					const tagValue = tagValues[ i ];

					if( time !== undefined ) {
						tagValue.time = time;
					}

					tagValue.value = value;
				}
			}
		}
	}

	setValues( id: string, values: unknown[], times?: number[] ): void {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tagValues = canvas.tags[ id ];
			if( tagValues != null ) {
				for( let i = 0, imax = tagValues.length; i < imax; ++i ) {
					const tagValue = tagValues[ i ];

					if( times !== undefined ) {
						tagValue.times = times;
					}

					tagValue.values = values;
				}
			}
		}
	}

	setTime( id: string, time: number ): void {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tagValues = canvas.tags[ id ];
			if( tagValues != null ) {
				for( let i = 0, imax = tagValues.length; i < imax; ++i ) {
					tagValues[ i ].time = time;
				}
			}
		}
	}

	setTimes( id: string, times: number[] ): void {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tagValues = canvas.tags[ id ];
			if( tagValues != null ) {
				for( let i = 0, imax = tagValues.length; i < imax; ++i ) {
					tagValues[ i ].times = times;
				}
			}
		}
	}

	setRange( id: string, from?: number | null, to?: number | null ): void {
		const canvas = this._diagram.canvas;
		if( canvas != null ) {
			const tagValues = canvas.tags[ id ];
			if( tagValues != null ) {
				for( let i = 0, imax = tagValues.length; i < imax; ++i ) {
					const range = tagValues[ i ].range;
					if( from !== undefined ) {
						if( from !== null ) {
							range.type |= EShapeTagValueRangeType.FROM;
							range.from = from;
						} else {
							range.type &= ~EShapeTagValueRangeType.FROM;
						}
					}
					if( to !== undefined ) {
						if( to !== null ) {
							range.type |= EShapeTagValueRangeType.TO;
							range.to = to;
						} else {
							range.type &= ~EShapeTagValueRangeType.TO;
						}
					}
				}
			}
		}
	}
}
