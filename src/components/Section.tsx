import React, { FC, ReactElement } from 'react'
import Paper from '@mui/material/Paper'
import styled from '@mui/material/styles/styled'

type SectionProps = {
  children?: ReactElement
}

const Section: FC<SectionProps> = ({ children }) => {
  return <SectionContainer elevation={0}>{children}</SectionContainer>
}

export default Section

const SectionContainer = styled(Paper)({
  maxWidth: '1440px',
  width: '100%',
  minHeight: '550px',
  marginTop: "-100px",
  zIndex: '10',
  position: 'relative',
  transform: 'translateX(-50%)',
  left: '50%',
  borderRadius: '20px'
})