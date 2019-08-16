import React from "react"
import {defaultProps} from "recompose"
import {withRouter} from "react-router"
import get from "@unction/get"
import mergeDeepRight from "@unction/mergedeepright"

import view from "@internal/view"
import {PageFooter} from "@internal/elements"


const originalPageStyle = {
  minHeight: 450,
}

export default view([
  function Page (props) {
    const {children} = props
    const {hasFooter} = props
    const {pageStyle} = props
    const dataComponent = get("data-component")(props)
    const combineStyle = mergeDeepRight(originalPageStyle)(pageStyle)
    const {match: {isExact, path, url}} = props

    return <main data-component={dataComponent} data-match-exact={isExact} data-match-path={path} data-match-url={url} css={combineStyle}>
      {children}
      {hasFooter && <PageFooter />}
    </main>
  },
  defaultProps({
    hasFooter: true,
    pageStyle: {},
  }),
  withRouter,
])
