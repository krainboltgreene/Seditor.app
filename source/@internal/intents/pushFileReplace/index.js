import mergeDeepRight from "@unction/mergedeepright"
import {path} from "ramda"

const {ipcRenderer} = window.require("electron")

export default function pushFileReplace (state) {
  return function pushFileReplaceState () {
    return function pushFileReplaceStateEvent () {
      const pathPattern = path(["ephemeral", "form", "searchAndReplace", "pathPattern"])(state)
      const searchPattern = path(["ephemeral", "form", "searchAndReplace", "searchPattern"])(state)
      const replacementPattern = path(["ephemeral", "form", "searchAndReplace", "replacementPattern"])(state)

      ipcRenderer.send("pushFileReplace", pathPattern, searchPattern, replacementPattern)

      return mergeDeepRight(state)({})
    }
  }
}
