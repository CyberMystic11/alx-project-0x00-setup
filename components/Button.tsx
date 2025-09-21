import React from "react";

interface ButtonProps {
  title: string;
  className?: string; // optional styles
}

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white font-semibold ${className || ""}`}>
      {title}
    </button>
  );
};

export default Button;
