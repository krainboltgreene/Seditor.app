import mergeDeepRight from "@unction/mergedeepright"

export default function updateInput (state) {
  return function updateInputState (event) {
    return function updateInputStateEvent (form) {
      return mergeDeepRight(state)({ephemeral: {form: {[form]: {[event.target.name]: event.target.value}}}})
    }
  }
}
