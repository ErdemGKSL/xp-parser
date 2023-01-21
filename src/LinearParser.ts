import { BaseParser } from "./BaseParser";

export class LinearParser extends BaseParser {

  /** @private */
  base: number;
  /** @private */
  multiplier: number;

  constructor(base: number, multiplier: number) {
    super();
    this.base = base;
    this.multiplier = multiplier;
  }

  override parseXpToLevel(xp: number): number {
    return Math.floor((xp - this.base) / this.multiplier);
  }

  override parseLevelToXp(level: number): number {
    return Math.floor(this.base + this.multiplier * level);
  }

}