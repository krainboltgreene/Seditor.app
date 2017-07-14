import {section} from "snabbdom-helpers"

import pathPattern from "./pathPattern"
import contentPatterns from "./contentPatterns"
import resultList from "./resultList"

export default function searchAndReplace (state) {
  return section({
    style: {
      "width": "100%",
      "height": "100%",
      "display": "flex",
      "flex-direction": "column",
      "flex-wrap": "nowrap",
    },
    inner: [
      pathPattern(),
      contentPatterns(),
      resultList(state),
    ],
  })
}
