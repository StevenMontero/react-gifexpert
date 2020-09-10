import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState("");
  const handleInput = (e)=>{
      setinputValue(e.target.value);
  };
  const handleSummit = (e)=>{
    e.preventDefault();
    if(inputValue.trim().length>2){
      setCategories(cats =>[inputValue,...cats]);
      setinputValue('');
    }
  };
  return (
    <form onSubmit={handleSummit}>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );


};
AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired,
};
