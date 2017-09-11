import {path} from "ramda"
import * as pages from "@internal/pages"
import {notFound} from "@internal/pages"
import view from "@internal/view"

export default function router () {
  return view(function withState (state) {
    const page = path(["ephemeral", "location", "page"])(state)

    if (page) {
      return pages[page](state)
    }

    return notFound
  })
}
