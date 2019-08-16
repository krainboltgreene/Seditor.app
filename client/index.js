import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {injectGlobal} from "emotion"

import {Application} from "@internal/ui"
import environment from "@internal/environment"
import {rematch} from "@internal/store"
import {cacheDatabase} from "@internal/store"
import {localDatabase} from "@internal/store"

const personalLocalDatabase = localDatabase("core")

cacheDatabase.replicate.from(personalLocalDatabase, {live: true})

injectGlobal({
  html: {
    height: "100%",
  },
})

window.env = environment(Array.from(document.querySelectorAll("meta[class='environment']")))

render(
  <Provider store={rematch}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>,
  document.getElementById("application")
)
