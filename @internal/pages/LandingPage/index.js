import React from "react"

import {Page} from "@internal/ui"
import {Heading} from "@internal/elements"
import {Anchor} from "@internal/elements"


const landingPageStyle = {}

export default function LandingPage () {
  return <Page subtitle="Welcome!" data-component="LandingPage" pageStyle={landingPageStyle}>
    <Heading kind="page">
      Blank Browser React
    </Heading>
    <Anchor kind="primary" href="/sign-up">
      Join us
    </Anchor>

    <Anchor kind="secondary" href="/sign-in">
      Login
    </Anchor>
  </Page>
}
