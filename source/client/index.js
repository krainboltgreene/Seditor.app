import "babel-polyfill"
import {run} from "@cycle/run"

import environment from "./environment"
import cycle from "./cycle"
import drivers from "./drivers"

window.env = environment(
  [...document.querySelectorAll("meta[type='environment']")]
)

run(cycle, drivers)
