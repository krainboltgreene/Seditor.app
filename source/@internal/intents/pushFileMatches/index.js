import mergeDeepRight from "@unction/mergedeepright"
import {indexBy} from "ramda"
import {prop} from "ramda"

export default function pushFileMatches (state) {
  return function pushFileMatchesState () {
    return function pushFileMatchesStateEvent (matches) {
      return mergeDeepRight(state)({resources: {files: indexBy(prop("id"))(matches)}})
    }
  }
}
