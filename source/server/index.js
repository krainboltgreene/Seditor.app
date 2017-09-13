// import needsRestart from "electron-squirrel-startup"
import {app as application} from "electron"
import {BrowserWindow} from "electron"
import {format} from "url"
import {join} from "path"
import requireEnvironmentVariables from "require-environment-variables"
import {config} from "dotenv"
import {log} from "@internal/logger"

import receptors from "./receptors"

console.log(config({path: join(__dirname, "..", ".env")}))

requireEnvironmentVariables([
  "NODE_ENV",
])

if (process.mas) {
  application.setName("seditor")
}

application.on("ready", function ready () {
  log.info("Application booting up...")

  process.window = new BrowserWindow({
    width: 800,
    height: 600,
  })

  process.window.loadURL(format({
    pathname: join(__dirname, "..", "client", "index.html"),
    protocol: "file:",
    slashes: true,
  }))

  if (process.env.NODE_ENV === "devepment") {
    process.window.webContents.openDevTools()
  }

  receptors()

  process.window.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    process.window = null
  })
})
