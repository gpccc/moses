import React from "react"

import Layout from "../components/layout"

// import ChurchMapCard from "../components/church-map/church-map-card"
import WorshipServices from "../views/worship-services"

export default function Home() {
  return (
    <Layout>
      <WorshipServices />
      {/* <ChurchMapCard /> */}
    </Layout>
 )
}