export type ParsedXP = {
  level: number,
  nextLevel: number,
  neededXp: number,
  currentXp: number,
  currentLevelXp: number,
  nextLevelXp: number,
  currentRelativeXp: number,
  nextRelativeXp: number,
}

export class Parser {
    /** @private */
    exponant: number;
    /** @private */
    base: number;
    /** @private */
    multiplier: number;
    constructor(base: number = 0, multiplier: number = 100, exponant: number = 2) {
        this.exponant = exponant;
        this.base = base;
        this.multiplier = multiplier;
    }

    parseXpToLevel(xp: number): number {
        return Math.floor(Math.pow((xp - this.base) / this.multiplier, 1 / this.exponant));
    }

    parseLevelToXp(level: number): number {
        return Math.floor(this.base + this.multiplier * Math.pow(level, this.exponant));
    }

    parseXp(xp: number): ParsedXP {
        const level = this.parseXpToLevel(xp);
        const nextLevel = level + 1;
        const neededXp = this.parseLevelToXp(nextLevel) - xp;
        const currentXp = xp;
        const currentLevelXp = this.parseLevelToXp(level);
        const nextLevelXp = this.parseLevelToXp(nextLevel + 1);
        const currentRelativeXp = currentXp - currentLevelXp;
        const nextRelativeXp = nextLevelXp - currentLevelXp;
        
        return {
            level,
            nextLevel,
            neededXp,
            currentXp,
            currentLevelXp,
            nextLevelXp,
            currentRelativeXp,
            nextRelativeXp,
        };
    }
}