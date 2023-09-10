import * as React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const OurBeliefPurpose = () => (
    <Container component="section" maxWidth="lg">
    <Paper sx={{my:2, py:2, px: {xs: 2, sm: 3, md: 4}}}>
        <Typography variant="h6" sx={{textTransform: 'uppercase'}}>About Us</Typography>
        <Typography variant="body1">
            We are a non-denominational, evangelical, Bible-adhering Chinese Church.
            Even though "Chinese" is part of our name, we welcome all to come join us,
            regardless of race, age, language or profession. Our church was established in 1982,
            with the objective of developing Christian followers who worship the true God,
            build up and care for one another, spread the good news of Jesus Christ to a lost world,
            and minister to those in need within the greater Phoenix metropolitan area.
            If you are looking for a church home, we cordially invite you to visit us and
            hope you will find a warm and genuine church family here.
        </Typography>

        <Typography variant="h6" sx={{textTransform: 'uppercase', mt: 3}}>Our Belief</Typography>
        <Typography variant="body1">
            <Box component="ul" sx={{my: 0}}>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> the Scriptures of the Old and New Testaments to be verbally inspired by God,
                being inerrant in the original text and it is the foundation of and the supreme authority
                for Christian faith, service, and life.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> in the one and only, never changing, absolutely holy God, who exists eternally
                as Father, Son, and Holy Spirit. He is the object of our worship and the subject of our praise.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> that Jesus Christ is the only begotten Son of God, conceived by the Holy Spirit,
                born of the virgin Mary. Word becoming flesh, and absolute sinless.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> in the Holy Spirit who was sent by the Father and the Son to reprove the world of sin,
                and lead people to repentance. He is continually at work convicting, convincing, and comforting.
                He indwells the believer fully at the point of salvation.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> that God created man in His own image, but that through the disobedience of Adam and Eve,
                all people are sinners both by nature and practice, and thus have inherited not only physical death as well.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> that the only way to be saved is to accept the salvation of Jesus Christ.
                Those who repent and accept this gift by faith, apart from any works, have experienced
                the new birth and are eternally secure.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> that Jesus Christ will return to judge the world according to His promise.
                Moreover, all men, good or evil, will be resurrected and to be judged in the Last Days.
                All who placed faith in Christ will receive eternal life, and all those have not believed
                will fall into eternal condemnation.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> that the Church, the Body of Christ, exists on both a local and universal level,
                with Jesus Christ as its Head.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>We believe</Box> that every born again believer has the responsibility to be an active participant
                in a local church which should exist to glorify God by: Acknowledging God's worth through worship,
                equipping the believers for ministry, building the Body through fellowship, and most importantly,
                preaching the Gospel of our Lord Jesus Christ and making disciples of all believers.
            </li>
            </Box>
        </Typography>

        <Typography variant="h6" sx={{textTransform: 'uppercase', mt: 3}}>Our Purpose</Typography>
        <Typography variant="body1">
        The purpose of our ministry is to ultimately glorify God. This will be accomplished as we carry through
        with the two-fold mandate of 1) Making disciples, and 2) Winning souls to our Lord Jesus Christ.
        We intend to nurture our members to these aims through the following interconnected four functions:
        <Box component="ul" sx={{my: 0}}>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>Worship</Box> As followers of Jesus Christ, we believe our utmost highest purpose is to worship God.
                The gathering together on Sunday morning for a worship celebration is the culmination of a week
                of living our lives daily for Him.
            </li>
            <li>
            <Box component="span" sx={{fontWeight: 'bold'}}>Teaching</Box> We believe that the Bible is the inspired, inerrant Word of the One and Only True God
                and is the sole source of truth and spiritual growth. To this end, we have adult, youth, and
                children's Sunday School classes to teach our people God's truths.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>Fellowship</Box> As a family, we encourage our members to get involved in one of our many fellowship groups.
                It is in these smaller, more intimate groups that relationships are nurtured. There are the
                Evergreen Fellowship for Seniors, various adult fellowship groups, Womens', Mens', Campus', District,
                Junior, Youth, College, Young Adult, Taiwanese, and Cantonese fellowships.
            </li>
            <li>
                <Box component="span" sx={{fontWeight: 'bold'}}>Outreach</Box> To carry out the Great Commission given to us by our Lord Jesus Christ,
                we strive to evangelize and witness to our community and the world. We support overseas missions
                (missionaries and seminaries), local outreach programs (e.g. homeless shelters and runaway children),
                as well as our own church seminaria
            </li>
        </Box>
        </Typography>
    </Paper>
    </Container>
)


export default OurBeliefPurpose