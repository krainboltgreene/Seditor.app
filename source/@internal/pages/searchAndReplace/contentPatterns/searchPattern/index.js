import {textarea} from "snabbdom-helpers"
import {label} from "snabbdom-helpers"

import column from "../column"

export default function searchPattern () {
  return column([
    label({
      style: {"text-align": "center"},
      inner: "Search Pattern",
    }),
    textarea({
      style: {
        "height": "100%",
        "font-family": "'Fira Code'",
      },
      attrs: {name: "searchPattern"},
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
