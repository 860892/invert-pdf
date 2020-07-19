import { ReactNode } from "react"
import React from "react"
import { Helmet } from "react-helmet"

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <Helmet>
        <title>Free PDF Colour Inverter Online</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
          type="text/css"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
      </Helmet>
      <body>
        {children}
        <footer
          style={{ position: "absolute", bottom: 0, fontSize: "x-small" }}
        >
          <p>
            Powered by <a href="https://docs.jivago.io">Jivago</a>
          </p>
          <p>
            Built with &#9829; by{" "}
            <a href="https://github.com/keotl">Kento A. Lauzon</a>
          </p>
        </footer>
      </body>
    </>
  )
}
