import ErrorMessage from '../ErrorMessage/ErrorMessage';
import styles from './InputField.module.css'

const InputField = ({ name, validation, placeholder, register, errors,className }) => (
  <div>
    <input {...register(name, validation)} type="text" placeholder={placeholder} className={styles[className]}/>
    {errors[name] && (
      <ErrorMessage
        message={errors[name].message}
        className={"errorMessage"}
      />
    )}
  </div>
);

export default InputField;