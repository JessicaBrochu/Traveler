import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'
import Box from '@mui/material/Box'
import React from 'react'

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>Book your next trip</HeroTitle>
    </HeroSection>
  )
}

export default Hero

const HeroSection = styled(Box)({
  backgroundImage: `url("src/assets/mountains-lake.jpg")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  maxWidth: '100vw',
  width: '100%',
  height: '60vh',
  '&::after': {
    position: 'absolute',
    content: `""`,
    width: '100%',
    height: '100%',
    background: 'black',
    opacity: '.3',
  },
})

const HeroTitle = styled(Typography)({
  position: 'absolute',
  zIndex: '10',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '90px',
  color: '#FFF',
  width: '100%',
  textAlign: 'center',
  fontWeight: '900',
  ['@media (max-width:1150px)']: {
    fontSize: '70px',
  },
  ['@media (max-width:864px)']: {
    fontSize: '50px',
  },
})
