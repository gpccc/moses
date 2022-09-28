import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Box>
        <Typography variant="h2" gutterBottom>
          Welcome, newcomer!
        </Typography>
      </Box>
    </Layout>
 )
}