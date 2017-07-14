import {textarea} from "snabbdom-helpers"
import {label} from "snabbdom-helpers"

import column from "../column"

export default function replacementPattern () {
  return column([
    label({
      style: {"text-align": "center"},
      inner: "Replacement Pattern",
    }),
    textarea({
      style: {height: "100%"},
      attrs: {name: "replacementPattern"},
      data: {
        signal: {
          type: "input",
          name: "updateInput",
          payload: "searchAndReplace",
        },
      },
    }),
  ])
}
