import React from "react"


import GoogleTagManager from "./GoogleTagManager"

export default function Head (props) {
  const {title} = props
  const {subtitle} = props

  return <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <title>{title} | {subtitle}</title>

    <GoogleTagManager />

    <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-icon-180x180.png" />
    <link rel="apple-touch-icon-precomposed" href="/assets/apple-icon-precomposed.png" />
    <link rel="icon" sizes="192x192" href="/assets/android-icon-192x192.png" />
    <link rel="icon" sizes="32x32" href="/assets/favicon-32x32.png" />
    <link rel="icon" sizes="96x96" href="/assets/favicon-96x96.png" />
    <link rel="icon" sizes="16x16" href="/assets/favicon-16x16.png" />
    <link rel="icon" href="/assets/favicon.ico" />
    <link rel="manifest" href="/assets/manifest.json" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Handlee%7COpen+Sans" />

    <link rel="copyright" href="/assets/copyright.txt" />
    <link rel="author" href="/assets/humans.txt" />

    <meta name="robots" content="index,follow" />

    {process.env.ORIGIN_LOCATION && <meta className="environment" name="ORIGIN_LOCATION" content={process.env.ORIGIN_LOCATION} />}
    {process.env.WWW_LOCATION && <meta className="environment" name="WWW_LOCATION" content={process.env.WWW_LOCATION} />}
    {process.env.LUMIN_LOCATION && <meta className="environment" name="LUMIN_LOCATION" content={process.env.LUMIN_LOCATION} />}

    <script src="/assets/babel-helpers.js" />

    {process.env.NODE_ENV === "development" && <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css" integrity="sha256-7GAtDQ79wTEOjhBKf70uBQG7A5yyb+8rigu07atXWDY=" crossOrigin="anonymous" />}
    {process.env.NODE_ENV === "development" && <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha256-NuCn4IvuZXdBaFKJOAcsU2Q3ZpwbdFisd5dux4jkQ5w=" crossOrigin="anonymous" />}

    {process.env.NODE_ENV === "production" && <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" integrity="sha256-oSrCnRYXvHG31SBifqP2PM1uje7SJUyX0nTwO2RJV54=" crossOrigin="anonymous" />}
    {process.env.NODE_ENV === "production" && <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossOrigin="anonymous" />}

    {process.env.NODE_ENV === "production" && <script type="text/javascript" src="//d2wy8f7a9ursnm.cloudfront.net/bugsnag-3.min.js" data-apikey={process.env.BUGSNAG_API_PUBLIC} />}
  </head>
}
