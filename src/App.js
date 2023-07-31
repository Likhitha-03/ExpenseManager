import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import LoginForm from './LoginForm'


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path='/Main' element={<Main/>} />
    </Routes>
    </>
  );
}

export default App;
