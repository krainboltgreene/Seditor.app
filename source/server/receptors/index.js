import {ipcMain} from "electron"

import pushFileSearch from "./pushFileSearch"
import pushFileReplace from "./pushFileReplace"

export default function receptors () {
  ipcMain.on("pushFileSearch", pushFileSearch)
  ipcMain.on("pushFileReplace", pushFileReplace)
}
