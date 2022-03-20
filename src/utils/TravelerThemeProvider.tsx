import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'

const TravelerThemeProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const theme = createTheme({
    typography: {
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default TravelerThemeProvider
