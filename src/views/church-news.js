import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import "../styles/church-news.css"

import churchNewsEnglish from "../constants/church-news-english"
import churchNewsCantonese from "../constants/church-news-cantonese"

const wholeChurchNews = {
  mandarin: {},
  cantonese: churchNewsCantonese,
  english: churchNewsEnglish
}

const ChurchNews = () => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const toLocaleDateStringSupportsLocales =
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"

    // Markdown syntax: https://commonmark.org/help/
    const churchNews = wholeChurchNews.cantonese

    const dates = Object.keys(churchNews)
    const newsDates = dates.map((newsDate, index) => {
    const date = new Date(newsDate+"T00:00:00") //date-only is interpreted as UTC where date-time is interpreted as local time
    const dateDisplay = toLocaleDateStringSupportsLocales
      ?
      date.toLocaleDateString("en-US", {
        weekday: "long", month: "long", day: "numeric", year: "numeric"
      })
      :
      date.toDateString()

      return <MenuItem value={newsDate} key={index}>{dateDisplay}</MenuItem>
  })

  const mostRecentNewsDate = dates[0]
  const [week, setWeek] = React.useState(mostRecentNewsDate)
  const handleChange = (event) => {
    setWeek(event.target.value)
  }

  const newsItems = churchNews[week].map((n, index) =>
    <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
      <Box><ReactMarkdown linkTarget="_blank">{`${index+1}. ${n}`}</ReactMarkdown></Box>
    </Grid>
  )

  return (
    <Paper sx={{m: {xs:2, sm:3}, pt:2}}>
      <Container maxWidth="false">
        <FormControl fullWidth={true}>
          <InputLabel id="church-news-label">Church news for</InputLabel>
          <Select
            labelId="church-news-label"
            id="church-news-select"
            value={week}
            label="Church news for"
            onChange={handleChange}
          >
            {newsDates}
          </Select>
        </FormControl>

        <Grid id="churchNews" container rowSpacing={0} columnSpacing={2}>
          {newsItems}
        </Grid>
     </Container>
    </Paper>
  )
}

export default ChurchNews