import xstream from "xstream"
import {always} from "ramda"

import view from "@internal/view"
import * as intents from "@internal/intents"
import {log} from "@internal/logger"

import initialState from "./initialState"
import parseAction from "./parseAction"
import ipc from "./ipc"

export default function cycle (sources) {
  const {DOM} = sources
  const state$ = xstream
    .merge(
      xstream
        .periodic(20000)
        .map(
          always({
            event: null,
            signal: {name: "beat"},
          })
        ),
      xstream
        .merge(
          ipc("pushFileMatches"),
          xstream
            .merge(
              DOM.events("input"),
              DOM.events("click"),
            )
            .map(parseAction)
        )
    )
    .filter(({event, type}) => typeof type === "undefined" || event.type === type)
    .fold(
      (state, {event, name, payload}) => {
        const reaction = intents[name]

        if (!reaction) {
          return state
        }

        log.info(
          {
            event,
            payload,
            before: state,
            after: reaction(state)(event)(payload),
          },
          name
        )

        return reaction(state)(event)(payload)
      },
      initialState()
    )

  return {DOM: state$.map(view)}
}
