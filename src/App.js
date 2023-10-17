import React from 'react'
import "./App.css";
import "./index.css"
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='w-full flex flex-col'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;