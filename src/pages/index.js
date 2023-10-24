import React from "react"

import {graphql, Script} from 'gatsby'

import Layout from "../components/layout"

// import ChurchMapCard from "../components/church-map/church-map-card"
import WorshipServices from "../views/worship-services"
import ChurchNews from "../views/church-news"

export const Head = ({ pageContext }) => {
  let pageTitle = "GPCCC: English"
  if (pageContext.language==="zh")
    pageTitle = "凰城华人基督教会: 华语部"
  else if (pageContext.language==="zf")
    pageTitle = "凰城華人基督教會: 粵語部"

  return <title>{pageTitle}</title>
}

export default function Home() {
  return (
    <>
    <Layout>
      <WorshipServices />
      <ChurchNews />
      {/* <ChurchMapCard /> */}
    </Layout>

    <Script src="https://www.youtube.com/iframe_api" />
    </>
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