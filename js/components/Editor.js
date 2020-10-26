import { handleInputValue } from "../actions/editor.js";
import { handleOutputValue } from "../actions/preview.js";
import { dispatch } from "../store/store.js";
import { Preview } from "./Preview.js";
const htmlEditor = document.querySelector(".editor"),
  textarea = htmlEditor.querySelector("#editor"),
  resizeButton = htmlEditor.querySelector("#resize-editor");

export const Editor = {
  htmlEditor,
  textarea,
  resizeButton,
  openFullView() {
    Preview.hideWindow();
    this.htmlEditor.classList.toggle("full-view");
  },
  textareaOnFirstLoad() {
    dispatch(handleOutputValue(marked(this.textarea.value)));
  },
  textareaOnChange() {
    this.textarea.addEventListener("keyup", ({ target: { value } }) => {
      dispatch(handleInputValue(value));
      dispatch(handleOutputValue(marked(value)));
    });
  },
  hideWindow() {
    this.htmlEditor.classList.toggle("display-none");
  },
  onEventListener() {
    this.textareaOnChange();
    this.resizeButton.addEventListener("click", () => {
      this.openFullView();
    });
  },
};
Editor.onEventListener();
