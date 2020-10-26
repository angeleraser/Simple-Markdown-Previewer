import { TYPES } from "../types/types.js";
export const previewReducer = (
  state = {
    output: "",
  },
  action
) => {
  switch (action.type) {
    case TYPES.previewSetOuput: {
      return {
        output: action.payload,
      };
    }
    default:
      return state;
  }
};

export const editorReducer = (
  state = {
    markdownText: "",
  },
  action
) => {
  switch (action.type) {
    case TYPES.editorOnChange:
      return {
        markdownText: action.payload,
      };
    default:
      return state;
  }
};
