import React from "react"
import {storiesOf} from "@storybook/react"
import {text} from "@storybook/addon-knobs"
import {select} from "@storybook/addon-knobs"
import Header from "./"

const kinds = [
  "page",
  "section"
]

storiesOf("Header", module)
  .add("kind page with no subtitle", () => <Header kind={select("kind", kinds, "page")} subtitle={text("subtitle", null)}>{text("content", "A Simple Life")}</Header>)
  .add("kind page with subtitle", () => <Header kind={select("kind", kinds, "page")} subtitle={text("subtitle", "The story of bob")}>{text("content", "A Simple Life")}</Header>)
  .add("kind section", () => <Header kind={select("kind", kinds, "section")} subtitle={text("subtitle", null)}>{text("content", "A Simple Life")}</Header>)
