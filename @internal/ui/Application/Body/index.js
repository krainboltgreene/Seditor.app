import React from "react"


import GoogleTagManager from "./GoogleTagManager"
import JavascriptWarning from "./JavascriptWarning"

export default function Body (props) {
  const {children} = props

  return <body id="application" data-component="Application">
    <GoogleTagManager />

    <JavascriptWarning />

    {children}

    <script async src="/assets/client.js" />
  </body>
}
