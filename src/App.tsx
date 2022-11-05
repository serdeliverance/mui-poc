import React from 'react'
import './App.css'
import { TourCard } from './components/TourCard'

function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </header>
      <body>
        <TourCard />
      </body>
    </div>
  )
}

export default App
