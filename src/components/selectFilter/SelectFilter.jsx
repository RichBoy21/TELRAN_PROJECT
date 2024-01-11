import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import styles from './../filter/Filters.module.css'


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: '#333',
    padding: '10px',
    color: '#8B8B8B',
    backgroundColor: state.isSelected ? '#DDD'  : 'white',
    '&:hover': {
      backgroundColor: state.isSelected ? '#DDD' : 'white', 
    },
  }),
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: 'none',

    '&:hover': {
      border: '1px solid  #DDD',
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    padding: '16px',
    position: 'absolute',
    top: '65%',
    left: 0,
    zIndex: 1,
    backgroundColor: 'white',
    border: 'none',
    outline: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  }),
};

const StyledSelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 'none ',
  `;

const StyledSelect = styled(Select)`

    width: 200px;
    height: 48px;
    color: #8B8B8B;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 126%;
    outline: none;

    @media (max-width: 400px) {

      width: 160px;
  }

    .css-1dimb5e-singleValue {
      padding-left: 16px;
  }
    .css-qbdosj-Input {
      opacity: -1;
      outline: none; 
  }
    .css-1u9des2-indicatorSeparator {
      width: 0px;
  }
   
  `;

const SelectFilter = ({ selectedOption, handleSelectChange }) => {
  const options = [
    { value: 'by default', label: 'by default' },
    { value: 'price: low-high', label: 'price: low-high' },
    { value: 'price: high-low', label: 'price: high-low' },
  ];

  return (
    <StyledSelectContainer>
      <label className={styles.labelSelect}>Sorted</label>
      <StyledSelect
        value={options.find(option => option.value === selectedOption)}
        onChange={handleSelectChange}
        options={options}
        styles={customStyles}
      />
    </StyledSelectContainer>
  );
};

export default SelectFilter;