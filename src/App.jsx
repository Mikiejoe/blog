import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import WhatWeDoPage from './pages/WhatWeDoPage'
import WhatWeHaveDone from './pages/WhatWeHaveDone'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/what-we-do" element={<WhatWeDoPage/>}/>
        <Route path="/what-we-have-done" element={<WhatWeHaveDone/>}/>   
      </Routes>
    </BrowserRouter>
  )
}

export default App