import React from "react"
import ReactMarkdown from 'react-markdown'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

import {graphql} from 'gatsby'

import Layout from "../components/layout"

import { useI18next } from '@herob/gatsby-plugin-react-i18next'

import CareersEnglish from '../constants/careers-english'
import CareersMandarin from '../constants/careers-mandarin'

export default function Careers() {
  const { i18n } = useI18next()

  return (
    <Layout>
      <Container component="section" maxWidth="lg">
      <Paper sx={{my:2, py:2, px: {xs: 2, sm: 3, md: 4}}}>
      <ReactMarkdown>{ i18n.language==="en" ? CareersEnglish : (i18n.language==="zf" ? "" : CareersMandarin) }</ReactMarkdown>
      </Paper>
      </Container>
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