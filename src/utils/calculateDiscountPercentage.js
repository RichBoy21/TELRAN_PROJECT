export const calculatePercentDiscount = (discontPrice, regularPrice) => {
    if (discontPrice) {
      return Math.floor(100 - (discontPrice * 100) / regularPrice);
    }
    return 0; // Если discontPrice не определено, вернуть 0 или другое значение по умолчанию
  };