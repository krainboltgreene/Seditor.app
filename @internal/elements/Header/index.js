import React from "react"
import {defaultProps} from "recompose"
import mergeDeepRight from "@unction/mergedeepright"
import get from "@unction/get"
import {Heading} from "evergreen-ui"
import {Paragraph} from "evergreen-ui"

import view from "@internal/view"

const originalHeaderStyle = {}
const headingKinds = {
  page: 900,
  section: 500,
}
const subtitleKinds = {
  page: 300,
  section: 400,
}

export default view([
  function Header (props) {
    const {children} = props
    const {headerStyle} = props
    const {kind} = props
    const {subtitle} = props
    const size = get(kind)(headingKinds)
    const subtitleSize = get(kind)(subtitleKinds)
    const combineHeaderStyle = mergeDeepRight(originalHeaderStyle)(headerStyle)

    return <header data-component="Header" data-kind={kind} css={combineHeaderStyle}>
      <Heading size={size}>
        {children}
      </Heading>
      {subtitle && <Paragraph size={subtitleSize}>{subtitle}</Paragraph>}
    </header>
  },
  defaultProps({
    headerStyle: {},
    subtitle: null,
  }),
])
