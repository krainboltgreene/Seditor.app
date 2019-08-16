import React from "react"
import view from "@internal/view"
import {defaultProps} from "recompose"
import {withHandlers} from "recompose"
import mergeDeepRight from "@unction/mergedeepright"

const baseStyle = {
  display: "flex",
  flexDirection: "column",
}

export default view([
  function NativeFormSection (props) {
    const {id} = props
    const {name} = props
    const {type} = props
    const {inputProperties} = props
    const {labelProperties} = props
    const {label} = props
    const {formSectionStyle} = props
    const {onInputChange} = props
    const {value: initialValue} = labelProperties
    const {value: localValue = initialValue} = state
    const combineStyle = mergeDeepRight(originalFormSectionStyle)(formSectionStyle)

    return <section css={combineStyle}>
      <label htmlFor={id}>{labelProperties.content}</label>
      <input id={id} name={name || id} type={labelProperties.type} required={labelProperties.required} onChange={labelProperties.onChangeInput} value={localValue} />
    </section>
  },
  defaultProps({
    formSectionStyle: {},
    inputProperties: {
      required: false,
      onChangeInput: () => null,
      value: ""
    },
    labelProperties: {
      name: null,
    },
  }),
  withHandlers({
    onChangeInput: (props) => (event) => {
      const {target} = event
      const {value} = target

      this.setState({value})
    }
  })
])
