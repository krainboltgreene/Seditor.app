import {section} from "snabbdom-helpers"
import {label} from "snabbdom-helpers"
import {input} from "snabbdom-helpers"
import {button} from "snabbdom-helpers"
// <div class="input-field col s6">
//   <input placeholder="Placeholder" id="first_name" type="text" class="validate">
//   <label for="first_name">First Name</label>
// </div>
export default function filePattern () {
  return section({
    style: {
      "display": "flex",
      "flex-direction": "column",
    },
    inner: [
      section({
        inner: [
          label({
            "inner": "Path",
            "for": "pathPattern",
          }),
          input({
            attrs: {name: "pathPattern"},
            data: {
              signal: {
                type: "input",
                name: "pushFileSearch",
                payload: "searchAndReplace",
              },
            },
          }),
        ],
      }),
      button({
        selector: ".btn.waves-effect.waves-light",
        style: {
          "line-height": "initial",
          "align-self": "center",
        },
        data: {
          signal: {
            type: "click",
            name: "pushFileReplace",
          },
        },
        inner: "Replace",
      }),
    ],
  })
}
