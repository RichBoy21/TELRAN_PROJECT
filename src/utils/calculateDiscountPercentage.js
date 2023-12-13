export const calculatePercentDiscount = (discontPrice, regularPrice) => {
  return Math.floor(100 - (discontPrice * 100) / regularPrice);
};
