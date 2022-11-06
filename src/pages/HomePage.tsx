import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
// TODO look for an elegant way to import global styles
import '../App.css'

import data from '../data.json'
import { City } from '../interfaces'
import { TourCard } from '../components'

const HomePage = () => {
  const [cities, setCities] = useState<City[]>([])

  useEffect(() => {
    setCities(data)
  }, [])

  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} key={tour.id} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  )
}

export default HomePage
