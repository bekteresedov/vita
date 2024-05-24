import { IInput } from "@/interfaces/UI/IInput";
import React, { memo } from "react";

const Input: React.FC<IInput> = (props) => {
  return (
    <>
      <input {...props} />
    </>
  );
};

export default memo(Input);
