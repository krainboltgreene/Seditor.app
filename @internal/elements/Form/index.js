import React from "react"
import {connect} from "react-redux"
import {defaultProps} from "recompose"
import {withHandlers} from "recompose"

import view from "@internal/view"
import {combinedSelectors} from "@internal/selectors"
import {formSelector} from "@internal/selectors"


export default view([
  function Form (props) {
    const {formStyle} = props
    const {name} = props
    const {formSlug} = props
    const {children} = props
    const {fromStyle} = props
    const {onSubmitForm} = props

    return <form data-component={name} onSubmit={onSubmitForm} data-form-slug={formSlug} name={name} css={formStyle}>
      {children}
    </form>
  },
  defaultProps({
    formStyle: {},
  }),
  connect(
    combinedSelectors({
      payload: formSelector,
    })
  ),
  withHandlers({
    onSubmitForm: (props) => (event) => {
      const {onSubmit} = props
      const {payload} = props

      event.preventDefault()

      return onSubmit(payload)
    },
  }),
])
