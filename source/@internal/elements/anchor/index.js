import {a} from "snabbdom-helpers"

const styles = {navigation: {}}

export default function anchor ({text, to, kind}) {
  return a({
    style: styles[kind],
    data: {
      signal: {
        name: "updateLocation",
        payload: to,
      },
    },
    inner: text,
  })
}
