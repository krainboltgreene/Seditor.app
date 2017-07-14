import {section} from "snabbdom-helpers"

export default function column (inner) {
  return section({
    style: {
      "width": "100%",
      "display": "flex",
      "flex-direction": "column",
    },
    inner,
  })
}
