/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DCoordinate } from "../../d-coordinate";
import { DInputIntegerOptions } from "../../d-input-integer";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemePickerTime } from "../../d-picker-time";
import { DPickerTimeBoundDate } from "../../d-picker-time-bound";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhitePickerTime extends DThemeWhiteBase implements DThemePickerTime {
	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	getMargin(): number {
		return 8;
	}

	getHoursOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Hours"
		};
	}

	getMinutesOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Minutes"
		};
	}

	getSecondsOptions(): DInputIntegerOptions {
		return {
			width: 100,
			title: "Seconds"
		};
	}

	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.HOURS | DPickerDatetimeMask.MINUTES;
	}

	getWidth(): DCoordinate {
		return "auto";
	}

	getHeight(): DCoordinate {
		return "auto";
	}

	getLowerBound(): DPickerTimeBoundDate {
		return null;
	}

	isLowerBoundInclusive(): boolean {
		return false;
	}

	getUpperBound(): DPickerTimeBoundDate {
		return null;
	}

	isUpperBoundInclusive(): boolean {
		return false;
	}
}
