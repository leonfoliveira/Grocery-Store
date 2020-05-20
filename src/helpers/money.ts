export const integerToMoney = (integer: number) =>
  `$ ${(integer / 100).toFixed(2)}`;
