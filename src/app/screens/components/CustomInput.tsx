import React, {ChangeEventHandler} from "react";
import {FormControl, Input} from "@chakra-ui/react";

interface InputProps {
  errorMsg: string;
  handleTextChange: ChangeEventHandler<HTMLInputElement>;
  isActive: boolean;
  position?: string;
}

const CustomInput = (props: InputProps) => {
  return (
    <FormControl className="floatLabel" display="flex" isInvalid={props.errorMsg != ""}>
      <Input h={12} name="email" variant="filled" onChange={props.handleTextChange} />
      <label className={props.isActive ? "Active" : ""}>
        {props.position == "top" ? "Enter your email..." : "email@example.com"}
      </label>

      {props.errorMsg}
    </FormControl>
  );
};

export default CustomInput;
