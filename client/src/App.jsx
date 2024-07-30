import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Toaster } from 'react-hot-toast';
import AuthContext from './context/AuthContext.js';
import NotFound from './pages/NotFound.jsx';
import SocketContextProvider from './context/SocketContext';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
        <SocketContextProvider>
          <div className='h-screen p-4 flex items-center justify-center'>
            <Toaster />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </SocketContextProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App
