import React from "react"
import {Label} from "evergreen-ui"
import {TextInput} from "evergreen-ui"
import {Textarea} from "evergreen-ui"
import {connect} from "react-redux"
import {defaultProps} from "recompose"
import {withState} from "recompose"
import {withHandlers} from "recompose"
import mergeDeepRight from "@unction/mergedeepright"

import view from "@internal/view"
import {combinedSelectors} from "@internal/selectors"
import {inputSelector} from "@internal/selectors"

const originalFormSectionStyle = {
  display: "flex",
  flexDirection: "column",
}

export default view([
  function FormSection (props) {
    const {fieldSlug} = props
    const {name} = props
    const {label} = props
    const {sectionStyle} = props
    const {onInputChange} = props
    const {value} = props
    const combineStyle = mergeDeepRight(originalFormSectionStyle)(sectionStyle)

    return <section css={combineStyle}>
      {children({onInputChange, value})}
    </section>
  },
  defaultProps({
    sectionStyle: {},
  }),
  withState("value", "updateLocalInputValue", ""),
  connect(
    combinedSelectors({
      value: inputSelector,
    })
  ),
  withHandlers({
    onInputChange: (props) => (event) => {
      const {updateLocalInputValue} = props
      const {dispatch: {forms: {updateFormInputValue}}} = props
      const {inputProperties: {onChange}} = props
      const {target: {value}} = event
      const {formSlug} = props
      const {fieldSlug} = props

      updateLocalInputValue(value)
      updateFormInputValue({value, formSlug, fieldSlug})
      if (onChange) {
        onChange({value, formSlug, fieldSlug, event})
      }
    },
  }),
])
