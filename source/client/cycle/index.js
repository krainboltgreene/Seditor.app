import xstream from "xstream"
import always from "@unction/always"
import domEventsMany from "@unction/domeventsmany"
import flip from "@unction/flip"
import {application} from "@internal/ui"
import {log} from "@internal/logger"
import stateStream from "./stateStream"
import eventAsAction from "./eventAsAction"
import withState from "./withState"
import ipc from "./ipc"

const beatSignal = {
  event: null,
  signal: {name: "beat"},
}
const eventStream = domEventsMany(
  {}
)(
  [
    "click",
    "hover",
    "input",
    "submit",
    "change",
  ]
)
const applicationWithState = flip(withState)(application())

export default function cycle (sources) {
  const {DOM} = sources

  return {
    DOM: stateStream([
      xstream.periodic(20000).map(always(beatSignal)),
      ipc("pushFileMatches"),
      eventStream(DOM).map(eventAsAction),
    ])
      .map(applicationWithState),
  }
}
