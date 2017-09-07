import mergeAllRight from "@unction/mergeallright"
import isType from "@unction/istype"
import equals from "@unction/equals"
import * as intents from "@internal/intents"
import initialState from "./initialState"

export default function stateStream (streams) {
  return mergeAllRight(streams)
    .debug()
    .filter(({event, type}) => isType("undefined")(type) || equals(type)(event.type))
    .fold(
      (state, {event, name, payload}) => {
        const reaction = intents[name]

        if (!reaction) {
          return state
        }

        return reaction(state)(event)(payload)
      },
      initialState()
    )
}
