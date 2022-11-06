import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

import HomePage from './pages/HomePage'
import TourPage from './pages/TourPage'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<TourPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
