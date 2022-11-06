import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { AccessTime } from '@mui/icons-material'
import { Rating } from '@mui/material'

export const TourCard = () => (
  <Grid item xs={3}>
    <Paper elevation={3} square>
      <img
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
        alt="Breakfast"
        className="img"
      />
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2">
          Immerse into the falls
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccessTime sx={{ width: 12.5 }} />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            5 hours
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
        <Rating name="read-only" value={4.5} precision={0.5} size="small" />
        <Typography variant="body2" component="p" marginLeft={0.5}>
          4.5
        </Typography>
        <Typography variant="body2" component="p" marginLeft={0.5}>
          (355 reviews)
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h3" marginTop={0}>
          From EUR 120
        </Typography>
      </Box>
    </Paper>
  </Grid>
)
