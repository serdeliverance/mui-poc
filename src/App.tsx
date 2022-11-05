import { Container, Grid } from '@mui/material'
import React from 'react'
import './App.css'
import { TourCard } from './components/TourCard'

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  )
}

export default App
