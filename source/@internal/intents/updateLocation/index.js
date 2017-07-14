import mergeDeepRight from "@unction/mergedeepright"

export default function updateLocation (state) {
  return function updateLocationState () {
    return function updateLocationStateEvent (page) {
      return mergeDeepRight(state)({ephemeral: {location: {page}}})
    }
  }
}
