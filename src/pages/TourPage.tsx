import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'

const TourPage = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt="The amazing Vegas"
          width={350}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="body1" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          reprehenderit at odit debitis veritatis recusandae, doloremque quod
          tempora soluta accusantium eos, aspernatur, voluptatibus facilis sint?
          Dicta, at! A, in cum!
        </Typography>
      </Box>
      {/* <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          Frequently asked questions
        </Typography>
      </Box> */}
    </Container>
  )
}

export default TourPage
