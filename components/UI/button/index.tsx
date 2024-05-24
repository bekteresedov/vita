import { IButton } from "@/interfaces/UI/IButton";
import React, { memo } from "react";

const Button: React.FC<IButton> = ({
  children,
  onClick,
  className,
  disabled,
  type,
}) => {
  return (
    <>
      <button
        type={type || "button"}
        disabled={disabled}
        className={`button ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default memo(Button);
