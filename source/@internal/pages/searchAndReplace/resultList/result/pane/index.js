import {pre} from "snabbdom-helpers"
import {code} from "snabbdom-helpers"
import escapeHTML from "escape-html"

export default function pane (content) {
  return pre({
    style: {width: "48%"},
    inner: code({
      selector: ".hljs",
      style: {"font-family": "'Fira code'"},
      props: {innerHTML: escapeHTML(content)},
    }),
  })
}
