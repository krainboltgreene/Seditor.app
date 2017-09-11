import {nav} from "snabbdom-helpers"
import {ul} from "snabbdom-helpers"
import {li} from "snabbdom-helpers"
import {strong} from "snabbdom-helpers"
import {section} from "snabbdom-helpers"
import {anchor} from "@internal/elements"

export default function navigation () {
  return nav({
    inner: section({
      selector: ".nav-wrapper",
      inner: [
        strong({
          selector: ".brand-logo",
          inner: "seditor",
        }),
        ul({
          inner: [
            li({
              inner: anchor({
                kind: "navigation",
                to: "searchAndReplace",
                text: "Search & Replace",
              }),
            }),
            li({
              inner: anchor({
                kind: "navigation",
                to: "help",
                text: "Help",
              }),
            }),
          ],
        }),
      ],
    }),
  })
}
