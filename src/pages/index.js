import React from "react"

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