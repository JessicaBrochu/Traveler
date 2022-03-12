import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import TravelerThemeProvider from './utils/TravelerThemeProvider'

const MyPage = () => {
  return <div>Hello</div>
}

function App() {
  return (
    <TravelerThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </TravelerThemeProvider>
  )
}

export default App
