import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import './App.css';
import RoutesApp from './routes';
import AppReducer from './context/reducer';
import thunk from "redux-thunk";



function App() {

  const store = createStore(AppReducer,compose(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
    <div className="App container">
      <RoutesApp />
    </div>
    </Provider>
  );
}

export default App;
