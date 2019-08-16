import React from "react"

import {Anchor} from "@internal/elements"
import {Heading} from "@internal/elements"
import {dark as darkColor} from "@internal/colors"
import {neutral as neutralColor} from "@internal/colors"
import {inverseAnchor as inverseAnchorColor} from "@internal/colors"

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minWidth: 320,
  textAlign: "center",
}
const documentationStyle = columnStyle
const copyrightStyle = columnStyle
const socialStyle = columnStyle
const footerStyle = {
  backgroundColor: darkColor,
  color: neutralColor,
  paddingBottom: 100,
}
const linksStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
}
const headingStyle = {fontSize: "3rem"}

export default function PageFooter () {
  return <footer data-component="Footer" css={footerStyle}>
    <Heading kind="page">
      <img src="/small-keyhole-llama.png" alt="the llama logo" />
      Lacqueristas
    </Heading>
    <section data-intent="links" css={linksStyle}>
      <section data-intent="documentation links" css={documentationStyle}>
        <Heading kind="section" customHeadingsStyle={headingStyle}>
          Documentation
        </Heading>
        <Anchor href="/this-is-us">This Is Us</Anchor>
        <Anchor href="/code-of-conduct">Code of Conduct</Anchor>
        <Anchor href="/data-policy">Data Policy</Anchor>
        <Anchor href="/our-technology">Our Technology</Anchor>
        <Anchor href="/privacy-policy">Privacy Policy</Anchor>
        <Anchor href="/terms-of-service">Terms Of Service</Anchor>
      </section>

      <section data-intent="copyright information" css={copyrightStyle}>
        <Heading kind="section" customHeadingsStyle={headingStyle}>
          Legal
        </Heading>
        <p>
          <strong>Lacqueristas</strong> by <Anchor href="https://kurits.rainbolt-greene.online">Kurtis Rainbolt-Greene</Anchor>.
          The source code is licensed <Anchor href="http://opensource.org/licenses/isc-license.php">ISC</Anchor>.
          The website content is licensed <Anchor href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</Anchor>.
        </p>
      </section>

      <section data-intent="social profiles" css={socialStyle}>
        <Heading kind="section" customHeadingsStyle={headingStyle}>
          Find us
        </Heading>
        <p>
          <Anchor href="https://github.com/lacqueristas"><span className="fa fa-github" /></Anchor>
          <Anchor href="https://twitter.com/lacqueristas"><span className="fa fa-twitter" /></Anchor>
        </p>
      </section>
    </section>
  </footer>
}
