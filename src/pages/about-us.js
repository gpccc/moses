import React from "react"

import {graphql} from 'gatsby'

import Layout from "../components/layout"

import { useI18next } from '@herob/gatsby-plugin-react-i18next'

import OurBeliefPurposeEnglish from "../views/belief-purpose-english"
import OurBeliefPurposeMandarin from "../views/belief-purpose-mandarin"

export default function AboutUs() {
  const { i18n } = useI18next()

  return (
    <Layout>
      { i18n.language==="en" ? <OurBeliefPurposeEnglish /> : <OurBeliefPurposeMandarin /> }
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