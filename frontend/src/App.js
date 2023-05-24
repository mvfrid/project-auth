import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FrontPage } from './components/FrontPage';
import { SignIn } from './components/SignIn'
import { user } from 'reducers/user';
import { secrets } from 'reducers/secrets';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


export const App = () => {

  const reducer = combineReducers({
    user: user.reducer,
    secrets: secrets.reducer
  });

  const store = configureStore({reducer})

  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="main-wrapper">
    <Routes>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/frontpage' element={<FrontPage/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </Provider>
  );
}
