import React from 'react'
import Navbar from './Navbar'
import Login from './Login';
import Home from './Home';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar>
        </Navbar>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
