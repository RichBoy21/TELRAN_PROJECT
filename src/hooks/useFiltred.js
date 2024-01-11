import { useState } from "react";

export const useFiltred = (items) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("by default");

  const getFiltredItems = (items) => {
    return items
      .filter((product) => {
        if (!isDiscounted) {
          return true;
        }
        return product.discont_price;
      })
      .filter((product) => {
        if (!from && !to) {
          return true;
        }

        if (from && to) {
          return product.price >= from && product.price <= to;
        }

        if (from) {
          return product.price >= from;
        }

        return product.price <= to;
      })
      .sort((a, b) => {
        if (selectedOption === "price: high-low") {
          return b.price - a.price;
        } else if (selectedOption === "price: low-high") {
          return a.price - b.price;
        }
      });
  };

  const handlePriceFromChange = (e) => {
    const value = e.target.value;

    const onlyNumbers = value.replace(/\D/g, "");
    setFrom(onlyNumbers);
  };
  const handlePriceToChange = (e) => {
    const value = e.target.value;

    const onlyNumbers = value.replace(/\D/g, "");
    setTo(onlyNumbers);
  };

  const handleDiscountChange = (e) => {
    const value = e.target.checked;

    setIsDiscounted(value);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
  };

  return {
    getFiltredItems,
    from,
    to,
    handlePriceFromChange,
    handlePriceToChange,
    handleDiscountChange,
    handleSelectChange,
    isDiscounted,
    selectedOption,
  };
};
