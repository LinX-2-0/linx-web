// App.js
import React from 'react';
import { BrowserRouter,Routes,Route, RouterProvider } from 'react-router-dom';
import { Router } from './Router';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Profile from './containers/Profile';
import SignUp from './containers/Login/signUp';

function App() {
  return (
  <BrowserRouter>
  {/* <RootLayout> */}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
  {/* </RootLayout> */}
  </BrowserRouter>    
  );
}

export default App;