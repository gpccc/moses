import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const ChurchNews = () => {
  // Markdown syntax: https://commonmark.org/help/
  const news = [
    "**College Summer Hangout** Sundays, 6pm for dinner, *The Compelling Community* book study, and hangout. [Schedule and book PDF](https://docs.google.com/spreadsheets/u/0/d/1LBt5VU7scEmssBQvSBKXA077QnPAIBGmUT1GqgXZid8/htmlview#gid=0). [Email Keith](mailto:english.college@gpccc.org) for info.",
    "**Church Membership Class** is today, 1:30pm. [Email P. Larry](mailto:larrylee@gpccc.org) to register.",
    "**Friday Fellowship and Awana start time** will move from 7:30pm up to 7:00pm starting July 21. Dinner served that night at 6pm in Fellowship Hall.",
    "**AWANA** registration is open. AWANA begins Fri., Aug. 11, 7pm. Please [register](https://forms.gle/RLTdtJLBqGM5NvQN6) before Aug. 1 to get the discount.",
    "**Patchwork Sisters** is hosting a Cardmaking and Shaved Ice Fellowship on Sat., July 22, 1-4pm in the Fellowship Hall. All ladies are welcome, including our youth! [Email Pam](mailto:meilipelangi@gmail.com) for details.",
    "The **Chinese Pastoral Search Committee** is Elder Hsi-an Kwong, Sylvia Hay, Hank Huang, Pi Lin Liu, Esther Wong and P. Chienhua Chen. This pastor will lead the Mandarin and Cantonese ministries. For details or recommendations, [email Elder Kwong](mailto:MandarinPSC.2023@gpccc.org) or any PSC member.",
    "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
    "**Chinese School** starts Sun., July 30, 1:30pm. Register in person Sat., July 29, 1:30-3:00pm in Fellowship Hall or [online](http://gpccs.org/) (4 year olds up to adults). Classes include simplified & traditional Chinese, bilingual, and adult conversation. Extracurricular: go chess, chess, drawing, Judo, speech, and ping pong.",
  ]
  const newsItems = news.map((n, index) =>
    <Grid xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
      <Box><ReactMarkdown linkTarget="_blank">{`${index+1}. ${n}`}</ReactMarkdown></Box>
    </Grid>
  )
    
  return (
    <Paper sx={{m: 2, pr: 2}}>
    <Grid container rowSpacing={0} columnSpacing={2}>
      {newsItems}
    </Grid>
    </Paper>
  )
}

export default ChurchNews