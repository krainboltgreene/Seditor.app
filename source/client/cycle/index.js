import xstream from "xstream"
import always from "@unction/always"
import domEventsMany from "@unction/domeventsmany"
import mergeAllRight from "@unction/mergeallright"

import view from "@internal/view"
import * as intents from "@internal/intents"
import {log} from "@internal/logger"

import initialState from "./initialState"
import parseAction from "./parseAction"
import ipc from "./ipc"

const beatSignal = {
  event: null,
  signal: {name: "beat"},
}

export default function cycle (sources) {
  const {DOM} = sources
  const state$ = mergeAllRight([
    xstream.periodic(20000).map(always(beatSignal)),
    ipc("pushFileMatches"),
    domEventsMany({})("*")(DOM).map(parseAction),
  ])
    .filter(({event, type}) => typeof type === "undefined" || event.type === type)
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

  return {DOM: state$.map(view)}
}
