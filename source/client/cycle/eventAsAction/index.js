import {mergeAll} from "ramda"
import {path} from "ramda"
import {split} from "ramda"
import {props} from "ramda"
import {objOf} from "ramda"
import mergeDeepRight from "@unction/mergedeepright"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import recordFrom from "@unction/recordfrom"
import mapValues from "@unction/mapvalues"
import splat from "@unction/splat"

const splitAttributeName = split("-")
const unflattenTree = reduceWithValueKey((accumulated) => (value) => (key) => mergeDeepRight(recordFrom(splitAttributeName(key))(value))(accumulated))({})
const objectBasedOnPaths = (keyKey) => (valueKey) => (element) => splat(objOf)(props([keyKey, valueKey])(element))
const sliceDOMAttributes = (attributes) => Reflect.apply(Array.prototype.slice, attributes, [])
const domAttributes = (element) => sliceDOMAttributes(path(["attributes"])(element))
const onlySignal = path(["data", "signal"])

export default function eventAsAction (event) {
  return {
    event,
    ...domAttributes(event.target)
      | mapValues(objectBasedOnPaths("name")("value"))
      | mergeAll
      | unflattenTree
      | onlySignal,
  }
}
