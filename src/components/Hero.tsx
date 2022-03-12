import { Box, styled, Typography } from '@mui/material'
import * as React from 'react'

const Hero = () => {
  return (
    <HeroSection>
      <Typography>Book your next trip</Typography>
      <HeroImg />
    </HeroSection>
  )
}

export default Hero

const HeroSection = styled(Box)({})

const HeroImg = styled(Box)({})
