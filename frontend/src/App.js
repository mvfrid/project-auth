import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FrontPage } from './components/FrontPage';
import { user } from 'reducers/user';
import { Secrets } from 'reducers/secrets';
import { configureStore } from '@reduxjs/toolkit';


export const App = () => {

  const reducer = combineReducers({
    user: user.reducer,
    secrets: secrets.reducers
  });

  const store = configureStore({reducer})

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
