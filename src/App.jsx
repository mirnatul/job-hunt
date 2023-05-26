import React from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-slate-100'>
      <div className='mx-2 lg:max-w-7xl lg:mx-auto pt-4'>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;