import React from "react";
import { ButtonProps } from "@/interfaces"; // or "../interfaces" if @/ doesn't work

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white font-semibold ${className}`}>
      {title}
    </button>
  );
};

export default Button;
