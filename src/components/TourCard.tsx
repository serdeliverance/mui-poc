import { Box, Grid, Paper, ThemeProvider, Typography } from '@mui/material'
import React, { FC } from 'react'
import { AccessTime } from '@mui/icons-material'
import { Rating } from '@mui/material'
import { createTheme } from '@mui/material'
import { Tour } from '../interfaces'

// TODO move those module declarations to other file
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true
  }
}

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
})

interface Props {
  tour: Tour
}

export const TourCard: FC<Props> = ({ tour }) => (
  <Grid item xs={3}>
    {/* TODO move ThemeProvider to app level */}
    <ThemeProvider theme={theme}>
      <Paper elevation={3} square>
        <img src={tour.image} alt="Breakfast" className="img" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            {tour.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.duration} {tour.duration > 1 ? 'hours' : 'hour'}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
          <Rating
            name="read-only"
            value={tour.rating}
            precision={0.5}
            size="small"
          />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            {tour.rating}
          </Typography>
          <Typography variant="body3" component="p" marginLeft={0.5}>
            ({tour.numberOfReviews}{' '}
            {tour.numberOfReviews > 1 ? 'reviews' : 'review'} )
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="h3" marginTop={0}>
            From EUR {tour.price}
          </Typography>
        </Box>
      </Paper>
    </ThemeProvider>
  </Grid>
)
