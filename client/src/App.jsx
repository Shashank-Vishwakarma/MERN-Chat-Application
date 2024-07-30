import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound.jsx';
import SocketContextProvider from './context/SocketContext';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
