import isType from "@unction/istype"
import mapValues from "@unction/mapvalues"
import arrayify from "@unction/arrayify"

export default function withState (state) {
  return function withStateState (component) {
    if (component.text) {
      return component
    }

    const rendered = isType("Function")(component) ? component(state) : component

    if (rendered.text) {
      return rendered
    }

    if (rendered.children) {
      return {
        ...rendered,
        children: mapValues(withStateState)(arrayify(rendered.children)),
      }
    }

    return rendered
  }
}
