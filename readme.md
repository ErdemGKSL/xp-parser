## Basic level parser

```js
const { ExponantialParser } = require("xp-parser");
const parser = new ExponantialParser(0, 100, 2);

const xp = parser.parseLevelToXp(1);
console.log(xp); // 100

const level = parser.parseXpToLevel(100);
console.log(level); // 1

const parse = parser.parseXP(100);
// {
//     "level": 1,
//     "nextLevel": 2,
//     "neededXp": 300,
//     "currentXp": 100,
//     "currentLevelXp": 100,
//     "nextLevelXp": 900,
//     "currentRelativeXp": 0,
//     "nextRelativeXp": 800
// }

```