import { ParsedXP } from "./ParsedXP";

export class BaseParser {

  xpToLevel(xp: number): number {
    return 0;
  }

  levelToXp(level: number): number {
    return 0;
  }

  parseXp(xp: number): ParsedXP {
    const level = this.xpToLevel(xp);
    const nextLevel = level + 1;
    const neededXp = this.levelToXp(nextLevel) - xp;
    const currentXp = xp;
    const currentLevelXp = this.levelToXp(level);
    const nextLevelXp = this.levelToXp(nextLevel + 1);
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