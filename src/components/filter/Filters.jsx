

const Filters = ({ handlePriceFromChange, handlePriceToChange, from, to, isDiscounted, handleDiscountChange, selectedOption, handleSelectChange }) => {

    return (
        <>
            <input
                value={from}
                onChange={handlePriceFromChange}
                placeholder="from"
            ></input>
            <input
                value={to}
                onChange={handlePriceToChange}
                placeholder="to"
            ></input>
            <input
                type="checkbox"
                checked={isDiscounted}
                onChange={handleDiscountChange}
            />
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="by default">by default</option>
                <option value="low">low</option>
                <option value="high">high</option>
            </select>
        </>
    );
}


export default Filters;