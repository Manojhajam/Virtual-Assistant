import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/Signin'

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  )
}

export default App
