import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Link } from 'react-router-dom';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <Route path="/friends" component={Friends} />
    </div>
  );
}

export default App;
