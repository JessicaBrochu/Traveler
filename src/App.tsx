import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom'

const MyPage = () => {
  return <div>Hello</div>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
