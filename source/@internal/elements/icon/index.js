import {i} from "snabbdom-helpers"

export default function icon (name) {
  return i({
    "class": {
      fa: true,
      [`fa-${name}`]: true,
    },
  })
}
