import {section} from "snabbdom-helpers"

import searchPattern from "./searchPattern"
import replacementPattern from "./replacementPattern"

export default function contentPattern () {
  return section({
    style: {
      height: "30%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      justifyContent: "center",
    },
    inner: [
      searchPattern(),
      replacementPattern(),
    ],
  })
}
