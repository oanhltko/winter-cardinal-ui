/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartAxis, DChartAxisPosition } from "./d-chart-axis";
import { DChartAxisContainer, DChartAxisContainerOptions } from "./d-chart-axis-container";
import { DChartPlotArea } from "./d-chart-plot-area";
import { EShapeContainer } from "./shape/e-shape-container";
import { utilIsNumber } from "./util/util-is-number";

export class DChartAxisContainerImpl implements DChartAxisContainer {
	protected _plotArea: DChartPlotArea;
	protected _container: EShapeContainer;
	protected _list: Map<DChartAxisPosition, DChartAxis[]>;

	constructor( plotArea: DChartPlotArea, options?: DChartAxisContainerOptions ) {
		this._plotArea = plotArea;
		this._container = new EShapeContainer();

		this._list = new Map<DChartAxisPosition, DChartAxis[]>();
		const list = options && options.list;
		if( list ) {
			for( let i = 0, imax = list.length; i < imax; ++i ) {
				this.add( list[ i ] );
			}
		}
	}

	get container(): EShapeContainer {
		return this._container;
	}

	get plotArea(): DChartPlotArea {
		return this._plotArea;
	}

	add( axis: DChartAxis ): void {
		const list = this._list;
		let axes = list.get( axis.position );
		if( axes == null ) {
			axes = [];
			list.set( axis.position, axes );
		}
		axes.push( axis );
		axis.bind( this, axes.length - 1 );
	}

	get( position: DChartAxisPosition, index: number ): DChartAxis | null {
		const list = this._list;
		const axes = list.get( position );
		if( axes ) {
			if( 0 <= index && index < axes.length ) {
				return axes[ index ];
			}
		}
		return null;
	}

	indexOf( axis: DChartAxis ): number {
		const list = this._list;
		const axes = list.get( axis.position );
		if( axes ) {
			return axes.indexOf( axis );
		}
		return -1;
	}

	remove( axis: DChartAxis ): DChartAxis | null;
	remove( position: DChartAxisPosition, index: number ): DChartAxis | null;
	remove( axisOrPosition: DChartAxis | DChartAxisPosition, indexOrUndefined?: number ): DChartAxis | null {
		const list = this._list;
		if( utilIsNumber( axisOrPosition ) ) {
			const position: DChartAxisPosition = axisOrPosition;
			const index = indexOrUndefined!;
			const axes = list.get( position );
			if( axes ) {
				if( 0 <= index && index < axes.length ) {
					const removed = axes.splice( index, 1 )[ 0 ];
					removed.unbind();
					removed.destroy();
					return removed;
				}
			}
		} else {
			const axis = axisOrPosition;
			const position: DChartAxisPosition = axis.position;
			const axes = list.get( position );
			if( axes ) {
				const index = axes.indexOf( axisOrPosition );
				if( 0 <= index ) {
					axes.splice( index, 1 );
					axis.unbind();
					axis.destroy();
					return axis;
				}
			}
		}
		return null;
	}

	clear( position: DChartAxisPosition ): this {
		const list = this._list;
		const axes = list.get( position );
		if( axes ) {
			for( let i = 0, imax = axes.length; i < imax; ++i ) {
				axes[ i ].destroy();
			}
			axes.length = 0;
		}
		return this;
	}

	size( position: DChartAxisPosition ): number {
		const list = this._list;
		const axes = list.get( position );
		if( axes ) {
			return axes.length;
		}
		return 0;
	}

	update(): void {
		this._list.forEach(( axes: DChartAxis[] ): void => {
			for( let i = 0, imax = axes.length; i < imax; ++i ) {
				axes[ i ].update();
			}
		});
	}

	destroy(): void {
		this._list.forEach(( axes: DChartAxis[] ): void => {
			for( let i = 0, imax = axes.length; i < imax; ++i ) {
				axes[ i ].destroy();
			}
			axes.length = 0;
		});
	}
}
