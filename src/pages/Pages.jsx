import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MealDetails from '../components/MealDetails'
import Searched from '../components/Searched'
import Home from './Home'
import Meals from './Meals'

export default function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/meals/:type' element={<Meals/>}/>
        <Route path='/results/:search' element={<Searched/>}/>
        <Route path='/meal/:name' element={<MealDetails/>}/>
    </Routes>
    </AnimatePresence>
  )
}
