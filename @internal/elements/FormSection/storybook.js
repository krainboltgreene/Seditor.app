import React from "react"
import {storiesOf} from "@storybook/react"
import FormSection from "./"
import {TextInput} from "evergreen-ui"
import {text} from "@storybook/addon-knobs"
import {select} from "@storybook/addon-knobs"
import {boolean} from "@storybook/addon-knobs"

storiesOf("FormSection", module)
  .add("email field with label", () =>
    <FormSection formSlug="edit-accounts" fieldSlug="email">
      {() => <TextInputField type="email" name="email" isRequired={boolean("isRequired", false)} label={text("label", "Email")} />}
    </FormSection>
  )


 // id={text("id", "email")} type={select("type", types, "email")} required={boolean("required", true)} fieldSlug={text("fieldSlug", "account-creation")}  initialValue={text("initialValue", "test")}
