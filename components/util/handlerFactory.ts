import React from "react";
import { Dispatch, SetStateAction } from "react";

export const formElementHandler = (
  setValue: Dispatch<SetStateAction<string>>
) => {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
};
