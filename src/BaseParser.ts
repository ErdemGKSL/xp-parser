import { ParsedXP } from "./ParsedXP";

export class BaseParser {

  parseXpToLevel(xp: number): number {
    return 0;
  }

  parseLevelToXp(level: number): number {
    return 0;
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