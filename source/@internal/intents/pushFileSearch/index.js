import updateInput from "../updateInput"

const {ipcRenderer} = window.require("electron")


export default function pushFileSearch (state) {
  return function pushFileSearchState (event) {
    return function pushFileSearchStateEvent (form) {
      ipcRenderer.send("pushFileSearch", event.target.value)

      return updateInput(state)(event)(form)
    }
  }
}
