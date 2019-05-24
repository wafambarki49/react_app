import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Posts from './components/component/posts';
import Comments from './components/component/comments';

function App() {
  return (
    <Router>

<div className="App">
     
    
<Route path='/' exact component= {Posts}></Route>
<Route path='/comment' component= {Comments}></Route>

</div>
    </Router>
   
  );
}

export default App;
