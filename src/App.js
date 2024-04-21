// App.js
import React from 'react';
import { BrowserRouter,Routes,Route, RouterProvider } from 'react-router-dom';
import { router } from './router';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Profile from './containers/Profile';

function App() {
  return (
  <BrowserRouter>
  {/* <RootLayout> */}
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
  {/* </RootLayout> */}
  </BrowserRouter>    
  );
}

export default App;