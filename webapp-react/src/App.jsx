import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './assets/layout/DefaultLayout'
import HomePage from './assets/pages/HomePage'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
