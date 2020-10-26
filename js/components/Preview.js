import { Editor } from "./Editor.js";
const htmlPreview = document.querySelector(".preview"),
  textarea = htmlPreview.querySelector("#preview"),
  resizeButton = htmlPreview.querySelector("#resize-preview");
export const Preview = {
  htmlPreview,
  textarea,
  resizeButton,
  openFullView() {
    Editor.hideWindow();
    this.htmlPreview.classList.toggle("full-view");
  },
  hideWindow() {
    this.htmlPreview.classList.toggle("display-none");
  },
  updateOutput(newValue) {
    this.textarea.innerHTML = newValue;
  },
  onEventListener() {
    this.resizeButton.addEventListener("click", () => {
      this.openFullView();
    });
  },
};
Preview.onEventListener();
