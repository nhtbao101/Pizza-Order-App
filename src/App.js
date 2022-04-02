import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import routers from './routers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routers.map((router, i) => (
            <Route key={i} path={router.path} element={router.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
