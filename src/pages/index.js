import React from "react"

import {graphql} from 'gatsby'

import Layout from "../components/layout"

// import ChurchMapCard from "../components/church-map/church-map-card"
import WorshipServices from "../views/worship-services"
import ChurchNews from "../views/church-news"

export default function Home() {
  return (
    <Layout>
      <WorshipServices />
      <ChurchNews />
      {/* <ChurchMapCard /> */}
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