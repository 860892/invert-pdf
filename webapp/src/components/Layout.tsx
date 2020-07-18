import { ReactNode } from "react"
import React from "react"
import { Helmet } from "react-helmet"

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <>
      <Helmet />
      <body>{children}</body>
    </>
  )
}
