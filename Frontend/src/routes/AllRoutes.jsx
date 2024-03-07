import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import SignupPage from '../pages/SignupPage'
import LoginPage from '../pages/LoginPage'
import NotesPage from '../pages/NotesPage'
import PrivateRoutes from './PrivateRoute'

export const AllRoutes = () => {
  return <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/register' element={<SignupPage/>}></Route>
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/notes' element={<PrivateRoutes><NotesPage/></PrivateRoutes>}></Route>
  </Routes>
  
}
