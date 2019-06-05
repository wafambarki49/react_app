import React,{ useContext, useReducer} from 'react';
import './App.css';
import RoutesApp from './routes';
import AppContext from './context/context';
import AppReducer from './context/reducer';

function App() {

  const firstState = useContext(AppContext);
  const [state,dispatch] = useReducer(AppReducer,firstState);

  return (
    <AppContext.Provider value={{ state,dispatch }}>
    <div className="App container">
      <RoutesApp />
    </div>
    </AppContext.Provider>
  );
}

export default App;
