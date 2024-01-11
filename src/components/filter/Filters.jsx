import SelectFilter from '../selectFilter/SelectFilter';
import styles from './Filters.module.css'

const Filters = ({ isDiscountPage, handlePriceFromChange, handlePriceToChange, from, to, isDiscounted, handleDiscountChange, selectedOption, handleSelectChange }) => {

    return (
        <div className={styles.filterInputsBox}>
            <div className={styles.priceFromToBox}>
                <label className={styles.labelPrice}>Price</label>
                <input
                    value={from}
                    onChange={handlePriceFromChange}
                    placeholder="from"
                    className={styles.inputsFrom}
                ></input>
                <input
                    value={to}
                    onChange={handlePriceToChange}
                    placeholder="to"
                    className={styles.inputsTo}
                ></input>
            </div>
            {!isDiscountPage && (
                <div className={styles.discountCheckboxBox}>
                    <label className={styles.labelPrice}>Discounted items</label>
                    <input
                        type="checkbox"
                        checked={isDiscounted}
                        onChange={handleDiscountChange}
                        className={styles.inputCheckbox}
                    />
                </div>
            )}
            <div className={styles.selectContainer}>
                <SelectFilter selectedOption={selectedOption} handleSelectChange={handleSelectChange} />
            </div>
        </div>
    );
}

export default Filters;



