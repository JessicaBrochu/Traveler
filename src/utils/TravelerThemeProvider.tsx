import { createTheme, ThemeProvider } from '@mui/material'
import * as React from 'react'

const TravelerThemeProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const theme = createTheme({
    typography: {
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`
    }
  })
  console.log( theme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default TravelerThemeProvider
