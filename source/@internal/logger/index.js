import {createLogger} from "bunyan"
import {tap} from "ramda"

export const log = createLogger({name: "seditor"})
export const logs = {
  debug: (data) => tap(() => log.debug(data)),
  info: (data) => tap(() => log.info(data)),
  warn: (data) => tap(() => log.warn(data)),
  error: (data) => tap(() => log.error(data)),
}
