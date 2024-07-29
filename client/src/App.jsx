import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Toaster } from 'react-hot-toast';
import AuthContext from './context/AuthContext.js';
import NotFound from './pages/NotFound.jsx';

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className='h-screen p-4 flex items-center justify-center'>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  )
}

export default App
