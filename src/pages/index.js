import React from "react"
import Button from "@mui/material/Button"

export const Head = () =>
  <>
  <link
    id="mui-roboto-font"
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />
  <link
    id="mui-font-icons"
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  </>

export default function Home() {
  return <Button variant="contained">Hello world!</Button>
}