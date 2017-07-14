import {article} from "snabbdom-helpers"
import {section} from "snabbdom-helpers"
import {strong} from "snabbdom-helpers"
import {path} from "ramda"
import isPopulated from "@unction/ispopulated"

import pane from "./pane"

export default function result (searchPattern) {
  return function resultPattern (replacementPattern) {
    return function resultPatternReplacement (file) {
      const before = path(["attributes", "content"])(file) || ""
      const after = isPopulated(before) ? before.replace(searchPattern, replacementPattern || searchPattern) : ""

      return article({
        style: {},
        inner: [
          strong({inner: file.id}),
          section({
            style: {
              "display": "flex",
              "flex-direction": "row",
            },
            inner: [
              pane(before),
              pane(after),
            ],
          }),
        ],
      })
    }
  }
}
