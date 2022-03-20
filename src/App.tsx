import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import TravelerThemeProvider from './utils/TravelerThemeProvider'

function App() {
  return (
    <TravelerThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </TravelerThemeProvider>
  )
}

export default App
