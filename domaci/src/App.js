import React from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom";
import './App.less';
import  Home  from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

class App extends React.Component {
  state = {


  }
  render(){
  return (
    <div className="App">
      <BrowserRouter>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
          
          </nav>
          
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" render={()=><Login></Login>}></Route>
          
            <Route path="/dashboard" component={Dashboard}></Route>
          </Switch>
        </BrowserRouter>
   
  
 

    </div>
  );
}}

export default App;
