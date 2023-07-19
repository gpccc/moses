import * as React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'

const NewsItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}))


const ChurchNews = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const newsItems = news.map((n) =>
    <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
      <NewsItem>News item {n}</NewsItem>
    </Grid>
  )
    
  return (
    <Paper sx={{m: 2, p: 2}}>
    <Grid container spacing={2}>
      {newsItems}
    </Grid>
    </Paper>
  )
}

export default ChurchNews