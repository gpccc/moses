import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

const OurBeliefPurpose = () => {
    const aboutUs = "# About Us"
    const ourBelief = "## Our Belief"
    const ourPurpose = "## Our Purpose"

    return (
    <Container component="section" maxWidth="xl">
    <Paper sx={{my:2, p:1}}>
        <ReactMarkdown>{aboutUs}</ReactMarkdown>
        <ReactMarkdown>{ourBelief}</ReactMarkdown>
        <ReactMarkdown>{ourPurpose}</ReactMarkdown>
    </Paper>
    </Container>
    )
}

export default OurBeliefPurpose