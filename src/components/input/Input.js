import React from 'react';

const Input = ({type, placeholder, onChangeInput}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChangeInput}
    />
  );
};

export default Input;