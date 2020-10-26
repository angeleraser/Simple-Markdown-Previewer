import { Editor } from "../components/Editor.js";
import { Preview } from "../components/Preview.js";
import { editorReducer, previewReducer } from "../reducers/reducers.js";
const { createStore, combineReducers } = Redux;
const reducers = combineReducers({
  editor: editorReducer,
  preview: previewReducer,
});
const store = createStore(reducers);
export const { subscribe: onUpdateStore, dispatch } = store;
const render = () => {
  const { preview } = store.getState();
  Preview.updateOutput(preview.output);
};
onUpdateStore(render);
Editor.textareaOnFirstLoad();
