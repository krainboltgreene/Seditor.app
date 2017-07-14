import {html} from "snabbdom-helpers"
import {head} from "snabbdom-helpers"
import {body} from "snabbdom-helpers"
import {main} from "snabbdom-helpers"

import {navigation} from "@internal/ui"
import router from "./router"

export default function view (state) {
  if (global.window) {
    return main({
      style: {
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
        "height": "100%",
      },
      inner: [
        navigation(state),
        router(state),
      ],
    })
  }

  return html({
    inner: [
      head(),
      body(),
    ],
  })
}
