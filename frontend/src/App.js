import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FrontPage } from './components/FrontPage'

export const App = () => {
  return (
    <BrowserRouter>
    <div className="main-wrapper">
    <Routes>
      <Route path='/FrontPage' element={<FrontPage/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}
