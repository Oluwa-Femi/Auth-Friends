import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route, Link, Redirect } from 'react-router-dom';
import Friends from './components/Friends';

const PrivateRoute = ({component: Component, ...rest}) => {
  // const propsWithNoComponent = {...props, component: undefined};
  return <Route {...rest} render={props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }} />;
};
const protectRoute = Component => props => {
  if (localStorage.getItem('token')) {
    return <Component {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}

const FriendsRoute = protectRoute(Friends);

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/friends" component={Friends} />
    </div>
  );
}

export default App;
