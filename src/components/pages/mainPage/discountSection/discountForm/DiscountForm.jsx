import styles from "./DiscountForm.module.css";
import Button from "../../../../ui/Button/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submitSalesData } from "../../../../../store/slices/saleSlice";
import { useEffect, useState } from "react";
import { inputFields } from "../../../../../utils/ formConfig";
import InputField from "../../../../ui/inputField/InputField";

const DiscountForm = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.sales);
  const [buttonText, setButtonText] = useState("Get a discount");
  const [buttonClass, setButtonClass] = useState("discountBtn");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

  const getDataFormInputs = (data) => {
    dispatch(submitSalesData(data));
    reset();
    setButtonText("Request Submitted");
  };

  useEffect(() => {
    if (status === "succeeded") {
      setButtonText("Request Submitted");
      setButtonClass("requestBtn");

      const timeoutId = setTimeout(() => {
        setButtonText("Get a discount");
        setButtonClass("discountBtn");
      }, 1000);
    }
  }, [status]);

  return (
    <form
      className={styles.discountForm}
      onSubmit={handleSubmit(getDataFormInputs)}
    >
      {inputFields.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          validation={field.validation}
          placeholder={field.placeholder}
          register={register}
          errors={errors}
          className={"inputsDiscount"}
        />
      ))}
      <Button type="submit" className={buttonClass} title={buttonText} />
    </form>
  );
};

export default DiscountForm;
