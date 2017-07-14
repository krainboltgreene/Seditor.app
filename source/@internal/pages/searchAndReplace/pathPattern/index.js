import {section} from "snabbdom-helpers"
import {label} from "snabbdom-helpers"
import {input} from "snabbdom-helpers"
import {button} from "snabbdom-helpers"

export default function filePattern () {
  return section({
    style: {
      "height": "10%",
      "display": "flex",
      "flex-direction": "row",
      "align-items": "center",
      "justify-content": "center",
    },
    inner: [
      label({
        "inner": "Path Pattern",
        "for": "pathPattern",
      }),
      input({
        style: {width: "75%"},
        attrs: {name: "pathPattern"},
        data: {
          signal: {
            type: "input",
            name: "pushFileSearch",
            payload: "searchAndReplace",
          },
        },
      }),
      button({
        data: {
          signal: {
            type: "click",
            name: "pushFileReplace",
          },
        },
        inner: "Replace",
      }),
    ],
  })
}
