import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ChurchNews = () => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const toLocaleDateStringSupportsLocales =
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"

  // Markdown syntax: https://commonmark.org/help/
  const churchNews = {
    "2023-08-20": [
      "The church is moving to **electronic voting** with the aim of improving voting efficiency and saving manpower. Voting tests will be open for the next two weeks. Mock ballots will be sent by email and SMS. The format is as follows:\n\n**Email from:** Greater Phoenix Chinese Christian Church <invitations@mail.electionbuddy.com>\n\nSubject: Vote now: Greater Phoenix Chinese Christian Church--Members Mock vote\n\n**Text (SMS) from:** (877) 225-8712\n\nGPCCC: Member Mock vote: VOTE Now - ebv.io/xxxx-xxxx-xxxx-xxxx",
      "**2023 Mission Conference** is Fri.-Sun., Sep. 15-17. Our theme is \“Proclaim His Name\” and our speaker is Brent Gambrell (Brent Gambrell Ministries). 30 Day Prayer for Mission Conference begins Sat. Aug. 19.",
      "**International Missions Potluck**, Sat., Sep. 16, 4:30–5:50pm. In the breezeway, grab a post-it with a food type on it and bring enough of your dish to feed five. This way, food from all our mission fields are represented.",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**Patchwork Sisters** ministry will host a women's breakfast on Sat, Aug. 26, 10am-1pm. Theme: Coram Deo. Speakers: Maria Wong, Karen Palmer, and Robin Stanton. Registration deadline is Aug. 20. $5/person. To register, [email Amy Lee](mailto:amygmlee@yahoo.com).",
      "**Crossroads Young Adults'** pool party is Sat., Aug. 26. [Email Eddie Kwan](mailto:edkwan88@hotmail.com) for info.",
      "**College Bible Study** is on Wednesdays on ASU campus (exact location TBD) starting Aug. 23. If interested please [fill out the contact form](https://docs.google.com/forms/d/e/1FAIpQLScz1aqYNTb7BXT62nuv6RokpNvRmFk9MXbvEzAT9v0hJVf0wA/viewform?pli=1). Please [email P. Chris](mailto:chris.sung@gpccc.org) for more information.",
    ],


    "2023-08-13": [
      "The church is moving to **electronic voting** with the aim of improving voting efficiency and saving manpower. Voting tests will be open for the next two weeks. Mock ballots will be sent by email and SMS. The format is as follows:\n\n**Email from:** Greater Phoenix Chinese Christian Church <invitations@mail.electionbuddy.com>\n\nSubject: Vote now: Greater Phoenix Chinese Christian Church--Members Mock vote\n\n**Text (SMS) from:** (877) 225-8712\n\nGPCCC: Member Mock vote: VOTE Now - ebv.io/xxxx-xxxx-xxxx-xxxx",
      "**2023 Mission Conference** is Fri.-Sun., Sep. 15-17. Our theme is \“Proclaim His Name\” and our speaker is Brent Gambrell (Brent Gambrell Ministries). 30 Day Prayer for Mission Conference begins Sat. Aug. 19.",
      "**College Summer Hangout** Sundays, 6pm for dinner, *The Compelling Community* book study, and hangout. [Schedule and book PDF](https://docs.google.com/spreadsheets/u/0/d/1LBt5VU7scEmssBQvSBKXA077QnPAIBGmUT1GqgXZid8/htmlview#gid=0). [Email Keith](mailto:english.college@gpccc.org) for info.",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**Reader's Circle** is Sat., Aug. 19, 10am at Phu & Henna's. They are reading _Freedom of Simplicity_ by Richard Foster. [Email Sheng Peng](mailto:sypeng123@yahoo.com) for info.",
      "**Crossroads Young Adults** on Sat., Aug. 19 is having a shaved ice event. [Email Eddie Kwan](mailto:edkwan88@hotmail.com) for info.",
      "**Patchwork Sisters** ministry will host a women's breakfast on Sat, Aug. 26, 10am-1pm. Theme: Coram Deo. Speakers: Maria Wong, Karen Palmer, and Robin Stanton. Registration deadline is Aug. 20. $5/person. To register, [email Amy Lee](mailto:amygmlee@yahoo.com).",
    ],

    "2023-08-06": [
      "**Today is Men/Women Sunday**. Men meet in the sanctuary at 9:30am and women in the Youth Center. For 11:!5am GROW, men move to B207 and the ladies meet in the Youth Center. We thank Bobby and Angie Cox from GoTEN for sharing. Items from GoTEN's refugee ministry are available for sale in the Youth Center.",
      "**Jane and Joni Li will be baptized today**. Ladies, please join the baptismal in the sanctuary at 10:30am after today's message.",
      "**College Summer Hangout** Sundays, 6pm for dinner, *The Compelling Community* book study, and hangout. [Schedule and book PDF](https://docs.google.com/spreadsheets/u/0/d/1LBt5VU7scEmssBQvSBKXA077QnPAIBGmUT1GqgXZid8/htmlview#gid=0). [Email Keith](mailto:english.college@gpccc.org) for info.",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**Emmanuel Active Adult Bible Study** is Fri., Aug. 11, 7pm in church office 205. [Email Sheng Peng](mailto:sypeng123@yahoo.com) for info.",
      "**AWANA** registration is open. AWANA begins Fri., Aug. 11, 7pm. Please [register](https://forms.gle/RLTdtJLBqGM5NvQN6).",
      "**Patchwork Sisters** ministry will host a women's breakfast on Sat, Aug. 26, 10am-1pm. Theme: Coram Deo. Speakers: Maria Wong, Karen Palmer, and Robin Stanton. Registration deadline is Aug. 20. $5/person.  To register, [email Amy Lee](mailto:amygmlee@yahoo.com).",
    ],

    "2023-07-30": [
      "**Men/Women Sunday** is Aug. 6. Men meet in the sanctuary at 9:30am and women in the Youth Center. For 11:!5am GROW, men move to B207 and the ladies don't move. Bobby and Angie Cox will be sharing.",
      "**College Summer Hangout** Sundays, 6pm for dinner, *The Compelling Community* book study, and hangout. [Schedule and book PDF](https://docs.google.com/spreadsheets/u/0/d/1LBt5VU7scEmssBQvSBKXA077QnPAIBGmUT1GqgXZid8/htmlview#gid=0). [Email Keith](mailto:english.college@gpccc.org) for info.",
      "**2024 Deacon Eligibility List**: We will be calling new deacons next year. Please check the eligibility list in the breezeway to see if you are listed (must be a member for at least 2 years to qualify).",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**AWANA** registration is open. AWANA begins Fri., Aug. 11, 7pm. Please [register](https://forms.gle/RLTdtJLBqGM5NvQN6) before Aug. 1 to get the discount.",
      "**AWANA teacher training** is Fri., Aug. 4, 7pm in the Sunday school office, B207/208 (TNT), B205 (Sparks), and D102 (Cubbies). Student classroom/council time/handbook time rule training will be in Fellowship Hall. Kids will watch a movie (superbook) after.",
      "The **Chinese Pastoral Search Committee** is Elder Hsi-an Kwong, Sylvia Hay, Hank Huang, PiLin Liu, Esther Wong and P. Chienhua Chen. This pastor will lead the Mandarin and Cantonese ministries. For details or recommendations, [email Hsi-an](mailto:MandarinPSC.2023@gpccc.org) or any PSC member.",
      "**Emmanuel Active Adult Bible Study** is Fri., Aug. 11, 7pm in church office 205. [Email Sheng Peng](mailto:sypeng123@yahoo.com) for info.",
      "**Chinese School** starts today, 1:30pm. Register at the Chinese school office or [online](https://gpccs.org). [Email Meiling Chiang](mailto:meiling.chiang1@gmail.com) for details.",
    ],
    "2023-07-23": [
      "**College Summer Hangout** Sundays, 6pm for dinner, *The Compelling Community* book study, and hangout. [Schedule and book PDF](https://docs.google.com/spreadsheets/u/0/d/1LBt5VU7scEmssBQvSBKXA077QnPAIBGmUT1GqgXZid8/htmlview#gid=0). [Email Keith](mailto:english.college@gpccc.org) for info.",
      "**Church Membership Class** is today, 1:30pm. [Email P. Larry](mailto:larrylee@gpccc.org) to register.",
      "**2024 Deacon Eligibility List**: We will be calling new deacons next year. Please check the eligibility list in the breezeway to see if you are listed (must be a member for at least 2 years to qualify).",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**AWANA** registration is open. AWANA begins Fri., Aug. 11, 7pm. Please [register](https://forms.gle/RLTdtJLBqGM5NvQN6) before Aug. 1 to get the discount.",
      "**Crossroads Young Adults** Bowling is Sat., July 29, 4pm. [Email Eddie Kwan](edkwan88@hotmail.com) for details.",
      "The **Chinese Pastoral Search Committee** is Elder Hsi-an Kwong, Sylvia Hay, Hank Huang, Pi Lin Liu, Esther Wong and P. Chienhua Chen. This pastor will lead the Mandarin and Cantonese ministries. For details or recommendations, [email Elder Kwong](mailto:MandarinPSC.2023@gpccc.org) or any PSC member.",
      "**Men/Women Sunday** is Aug. 6. Men meet in the sanctuary at 9:30am and women in the Youth Center. For 11:!5am GROW, men move to B207 and the ladies don’t move. Bobby and Angie Cox will be sharing.",
      "**Chinese School** starts Sun., July 30, 1:30pm. Register in person Sat., July 29, 1:30-3:00pm in Fellowship Hall or [online](http://gpccs.org/) (4 year olds up to adults). Classes include simplified & traditional Chinese, bilingual, and adult conversation. Extracurricular: go chess, chess, drawing, Judo, speech, and ping pong.",
    ],
    "2023-07-16": [
      "**College Summer Hangout** Sundays, 6pm for dinner, *The Compelling Community* book study, and hangout. [Schedule and book PDF](https://docs.google.com/spreadsheets/u/0/d/1LBt5VU7scEmssBQvSBKXA077QnPAIBGmUT1GqgXZid8/htmlview#gid=0). [Email Keith](mailto:english.college@gpccc.org) for info.",
      "**Church Membership Class** is today, 1:30pm. [Email P. Larry](mailto:larrylee@gpccc.org) to register.",
      "**Friday Fellowship and Awana start time** will move from 7:30pm up to 7:00pm starting July 21. Dinner served that night at 6pm in Fellowship Hall.",
      "**AWANA** registration is open. AWANA begins Fri., Aug. 11, 7pm. Please [register](https://forms.gle/RLTdtJLBqGM5NvQN6) before Aug. 1 to get the discount.",
      "**Patchwork Sisters** is hosting a Cardmaking and Shaved Ice Fellowship on Sat., July 22, 1-4pm in the Fellowship Hall. All ladies are welcome, including our youth! [Email Pam](mailto:meilipelangi@gmail.com) for details.",
      "The **Chinese Pastoral Search Committee** is Elder Hsi-an Kwong, Sylvia Hay, Hank Huang, Pi Lin Liu, Esther Wong and P. Chienhua Chen. This pastor will lead the Mandarin and Cantonese ministries. For details or recommendations, [email Elder Kwong](mailto:MandarinPSC.2023@gpccc.org) or any PSC member.",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**Chinese School** starts Sun., July 30, 1:30pm. Register in person Sat., July 29, 1:30-3:00pm in Fellowship Hall or [online](http://gpccs.org/) (4 year olds up to adults). Classes include simplified & traditional Chinese, bilingual, and adult conversation. Extracurricular: go chess, chess, drawing, Judo, speech, and ping pong.",
    ],
    // https://english.gpccc.org/2022/09/16/9-18-2022/
    "2022-09-21": [
      "**We thank Pastor Bobby Cox for sharing with us this weekend. We have a combined GROW from 11:15-12:25pm in the Youth Center today.**",
      "[**Electronic voting is coming to Greater Phoenix Chinese Christian Church**](https://gpccc.org/2022/07/24/electronic-voting-is-coming-%e6%95%99%e6%9c%83%e6%8a%95%e7%a5%a8%e9%9b%bb%e5%ad%90%e5%8c%96/). In order to promote the office efficiency, the church will soon migrate to electronic voting.  Members will receive eBallot via email and text message.  To facilitate this task, members please fill in your email and mobile number via the [Google form](https://forms.gle/gzLS6xb2BG8nkaBc7) below. **The information will not be used for other purposes.**",
      "**The Student Pastoral Search Committee has unanimously invited Pastor Chris Sung to interview Sep. 30- Oct. 2 (Fri-Sun).**",
      "Calling all YOUTH! **The Lunch Ministry** would love help each week to set up chairs and tables in the Fellowship Hall before lunch. Drop by the fellowship hall right after English worship and before Sunday GROW (10:45-11:10am), Mike McCabe or a team member will have set-up instructions.",
      "**Youth Group** Fri., Sep. 23 is Postcamp and meets at 7pm in the Youth Center. All teens welcome. For info, [email youth.ministry@gpccc.org](mailto:youth.ministry@gpccc.org).",
      "Church **PA Ministry** volunteers needed to help with video and livestreaming of the church service. No experience necessary. Please [email Chong-Jin](mailto:ong_chong_jin@hotmail.com).",
      "**Prayer Meeting** is Wednesdays, 7:30-8:30pm (Zoom: 233 085 786; PW 007276). [Email P. Larry](mailto:larrylee@gpccc.org) for info.",
      "**Reader’s Circle** book is Knowing God by J.I. Packer for Sep. 24 meeting at Phu & Henna's. Contact P. Larry or [Sheng Peng](mailto:sypeng123@yahoo.com) for info.",
      "**Christmas Cantata** starts practicing Sep. 25, 2:30-3:30pm, in the sanctuary. [Email Sue Chiou](mailto:suechiou@gmail.com) for info.",
      "**Church Membership Class** Sun., Sep. 25, 1-2pm. Register with the church office.",
    ]
  }

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
        <FormControl sx={{ minWidth: 292 }} fullWidth={true}> {/* Width 292 is big enough for Wednesday, September 21, 2022 */}
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

        <Grid container rowSpacing={0} columnSpacing={2}>
          {newsItems}
        </Grid>
      </Container>
    </Paper>
  )
}

export default ChurchNews