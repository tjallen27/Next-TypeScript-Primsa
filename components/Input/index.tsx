import React from "react";
import { Wrapper } from "./styles";

interface InputProps {
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
  name: string;
}

const Input = ({
  value,
  onChange,
  placeholder,
  name,
}: InputProps) => {
  return (
    <Wrapper
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
