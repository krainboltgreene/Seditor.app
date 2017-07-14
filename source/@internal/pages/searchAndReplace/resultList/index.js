import {section} from "snabbdom-helpers"
import {path} from "ramda"
import {values} from "ramda"
import mapValues from "@unction/mapvalues"

import result from "./result"

export default function resultList (state) {
  const files = values(path(["resources", "files"])(state))
  const searchPattern = path(["ephemeral", "form", "searchAndReplace", "searchPattern"])(state)
  const replacementPattern = path(["ephemeral", "form", "searchAndReplace", "replacementPattern"])(state)

  return section({
    style: {height: "60%"},
    inner: mapValues(result(searchPattern)(replacementPattern))(files),
  })
}
