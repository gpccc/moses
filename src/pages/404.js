import React from "react"
import Button from "@mui/material/Button"

import Layout from "../components/layout"

export default function PageNotFound(props) {
  const url = props.location.pathname

  return (
    <Layout>
        <h3>Error 404: Page not found</h3>
        <p>The requested link {url} is broken.</p>
        <Button onClick={() => props.navigate(-1)}>Go back</Button>
    </Layout>
 )
}