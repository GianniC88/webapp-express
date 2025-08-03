import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import DefaultLayout from './assets/layout/DefaultLayout'
import HomePage from './assets/pages/HomePage'
import SingleMovies from './assets/pages/SingleMoviesPage'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies/:id' element={<SingleMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
