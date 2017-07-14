import {mergeAll} from "ramda"
import {path} from "ramda"
import {split} from "ramda"
import {props} from "ramda"
import {objOf} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import nestedObjOf from "@unction/nestedobjof"
import mapValues from "@unction/mapvalues"
import splat from "@unction/splat"

export default function parseAction (event) {
  const splitAttributeName = split("-")
  const unflattenTree = reduceWithValueKey((accumulated) => (value) => (key) => mergeDeepRight(nestedObjOf(splitAttributeName(key))(value))(accumulated))({})
  const objectBasedOnPaths = (keyKey) => (valueKey) => (element) => splat(objOf)(props([keyKey, valueKey])(element))
  const sliceDOMAttributes = (attributes) => Reflect.apply(Array.prototype.slice, attributes, [])
  const domAttributes = (element) => sliceDOMAttributes(path(["attributes"])(element))
  const onlySignal = path(["data", "signal"])

  return {
    event,
    ...domAttributes(event.target)
      | mapValues(objectBasedOnPaths("name")("value"))
      | mergeAll
      | unflattenTree
      | onlySignal,
  }
}
