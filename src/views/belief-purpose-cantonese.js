import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

import BeliefPurposeCantonese from '../constants/belief-purpose-cantonese'

const OurBeliefPurposeMandarin = () => (
    <Container component="section" maxWidth="lg">
    <Paper sx={{my:2, py:2, px: {xs: 2, sm: 3, md: 4}}}>
    <ReactMarkdown>{BeliefPurposeCantonese}</ReactMarkdown>
    </Paper>
    </Container>
)

export default OurBeliefPurposeMandarin