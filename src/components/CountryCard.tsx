import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Paper from '@mui/material/Paper'
import { House } from './Inputs'
import styled from '@mui/material/styles/styled'

const CountryCard = ({ data }: { data: House[] }) => {
  return (
    <CardContainer>
      {data.map(({ image, title, description, id }) => (
        <CountryItem elevation={0} key={id}>
          <CardMedia
            component="img"
            height="300"
            image={`src/assets/${image}`}
            alt={title}
            sx={{
              borderRadius: '8px',
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              color={'#334655'}
              fontWeight={300}
              variant="body2"
            >
              {description}
            </Typography>
            <Typography
              variant="h6"
              color={'#334655'}
              fontWeight={700}
              component="div"
            >
              {title}
            </Typography>
          </CardContent>
        </CountryItem>
      ))}
    </CardContainer>
  )
}

export default CountryCard

const CardContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '30px',
  padding: '0 30px',
  marginTop: '50px',
  ['@media (max-width:1150px)']: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  ['@media (max-width:864px)']: {
    gridTemplateColumns: '1fr',
  },
})

const CountryItem = styled(Paper)({
  maxWidth: '440px',
  width: '100%',
  ['@media (max-width:1150px)']: {
    maxWidth: 'none',
  },
})
