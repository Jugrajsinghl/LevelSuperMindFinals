import { useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
// import Navbar from './Pages/Navbar/navbar'
import LoginPage from './Pages/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WellnessGames from './Pages/WellnessGames'
import MemoryGarden from './Pages/MemoryGarden'
import BreathGame from './Pages/BreathGame'
import ZenPattern from './Pages/ZenPattern'
import WellnessBook from './Pages/WellnessBook'
import WellnessVideo from './Pages/WellnessVideo'

function App() {

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/WellnessGames' element={<WellnessGames/>}/>
      <Route path='/memorygarden_game' element={<MemoryGarden/>}/>
      <Route path='/breath_game' element={<BreathGame/>}/>
      <Route path='/zen_patterns' element={<ZenPattern/>}/>
      <Route path='/wellness_books' element={<WellnessBook/>}/>
      <Route path='/videos' element={<WellnessVideo/>}/>
      <Route path='/authenticate' element={<LoginPage/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
