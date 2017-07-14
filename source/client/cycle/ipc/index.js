const {ipcRenderer} = window.require("electron")

import xstream from "xstream"

export default function ipc (name) {
  return xstream.create({
    start (listener) {
      ipcRenderer.on(name, (event, payload) => {
        listener.next({
          name,
          payload,
        })
      })
    },
    stop () {
      ipcRenderer.removeAllListeners([name])
    },
  })
}
