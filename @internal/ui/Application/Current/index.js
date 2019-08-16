import React from "react"
import {Switch} from "react-router-dom"
import {Route} from "react-router-dom"

import {LandingPage} from "@internal/pages"
import {CodeOfConduct} from "@internal/pages"
import {DataPolicy} from "@internal/pages"
import {OurTechnology} from "@internal/pages"
import {PrivacyPolicy} from "@internal/pages"
import {TermsOfService} from "@internal/pages"
import {TheCost} from "@internal/pages"
import {ThisIsUs} from "@internal/pages"
import {SignUp} from "@internal/pages"
import {PageNotFound} from "@internal/pages"

import ErrorBoundry from "./ErrorBoundry"

export default function Current () {
  return <ErrorBoundry>
    <Switch>
      <Route path="/code-of-conduct" component={CodeOfConduct} />
      <Route path="/data-policy" component={DataPolicy} />
      <Route path="/our-technology" component={OurTechnology} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/the-cost" component={TheCost} />
      <Route path="/this-is-us" component={ThisIsUs} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/" component={LandingPage} />
      <Route component={PageNotFound} />
    </Switch>
  </ErrorBoundry>
}
