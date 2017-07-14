import {header} from "snabbdom-helpers"
import {nav} from "snabbdom-helpers"
import {section} from "snabbdom-helpers"

import {anchor} from "@internal/elements"

export default function navigation () {
  return header({
    inner: nav({
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      inner: [
        section({
          inner: [
            anchor("searchAndReplace")("Search & Replace"),
          ],
        }),
        section({
          inner: [
            anchor("help")("Help"),
          ],
        }),
      ],
    }),
  })
}
