import { TYPES } from "../types/types.js";
export const handleInputValue = (newVal) => {
  return {
    type: TYPES.editorOnChange,
    payload: newVal,
  };
};
