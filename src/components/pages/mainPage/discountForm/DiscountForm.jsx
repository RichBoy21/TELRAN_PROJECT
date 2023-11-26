import { useState } from "react";
import sendDiscount from "../../../store/slices/categoriesSlice";

const DiscountForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handeleClick = () => {
    fetch("http://localhost:3333/sale/send ", {
      method: "POST",
      body: JSON.stringify({ name, phone, email }),
    });
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />

      <button type="button" onClick={handeleClick}>
        Get a discount
      </button>
    </div>
  );
};

export default DiscountForm;
