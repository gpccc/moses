import React from "react"
import {navigate, graphql} from 'gatsby'
import {Box, Button, Typography} from "@mui/material/"

import Layout from "../components/layout"

import {useI18next} from '@herob/gatsby-plugin-react-i18next'

import {BrokenBread} from "../components/broken-bread"

export default function PageNotFound(props) {
  const url = props.location.pathname

  const { t } = useI18next()

  return (
    <Layout showCongregationTabs={false}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{mx: 2, my: 1}}>
        <Typography variant="h3">{t("Page not found")}</Typography>
        <Typography variant="h5" sx={{mt: 2}}>{t("The_requested_link_url_is_broken", {url})}</Typography>
        <BrokenBread />
        <Button variant="contained" disableElevation sx={{mt: 1}} onClick={() => navigate(-1)}>{t("Go back")}</Button>
      </Box>
    </Layout>
 )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {ns: {in: ["common"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`