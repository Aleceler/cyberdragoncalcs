export const CalcLife = (lvl, cons) => {
  return (5 * cons * (1 + lvl * 0.2)).toFixed(2);
};

export const CalcAtk = (lvl, mainAttr) => {
  return (mainAttr * (1 + 0.2 * lvl)).toFixed(2);
};

export const CalcDef = (lvl, will) => {
  return (will * (1 + 0.2 * lvl)).toFixed(2);
};

export const CalcMagicDef = (lvl, spi) => {
  return (spi * (1 + 0.2 * lvl)).toFixed(2);
};

export const CalcHitRate = (agi, enemyAgi) => {
  let calc = parseInt(agi) + parseInt(enemyAgi) / 2;
  return (agi / calc).toFixed(2);
};
