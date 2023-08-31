import { BaseParser } from "./BaseParser";

export class ExponentialParser extends BaseParser {
    /** @private */
    exponant: number;
    /** @private */
    base: number;
    /** @private */
    multiplier: number;
    constructor(base: number = 0, multiplier: number = 100, exponant: number = 2) {
        super();
        this.exponant = exponant;
        this.base = base;
        this.multiplier = multiplier;
    }

    override xpToLevel(xp: number): number {
        return Math.floor(Math.pow((xp - this.base) / this.multiplier, 1 / this.exponant));
    }

    override levelToXp(level: number): number {
        return Math.floor(this.base + this.multiplier * Math.pow(level, this.exponant));
    }

}