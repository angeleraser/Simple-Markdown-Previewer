import { TYPES } from "../types/types.js";
export const handleOutputValue = (newVal) => {
  return {
    type: TYPES.previewSetOuput,
    payload: newVal,
  };
};
