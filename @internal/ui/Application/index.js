import React from "react"

import Head from "./Head"
import Body from "./Body"
import Current from "./Current"

export default function Application () {
  if (global.window) {
    return <Current />
  }

  return <html lang="en">
    <Head title="Lacqueristas" />
    <Body>
      <Current />
    </Body>
  </html>
}
