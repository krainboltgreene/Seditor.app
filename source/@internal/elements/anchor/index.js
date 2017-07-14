import {button} from "snabbdom-helpers"

export default function anchor (to) {
  return function anchorTo (inner) {
    return button({
      data: {
        signal: {
          name: "updateLocation",
          payload: to,
        },
      },
      inner,
    })
  }
}
