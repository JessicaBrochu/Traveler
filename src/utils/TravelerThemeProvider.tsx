import { createTheme, ThemeProvider } from '@mui/material'
import * as React from 'react'

const TravelerThemeProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const theme = createTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default TravelerThemeProvider
