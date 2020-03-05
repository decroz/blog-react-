import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import ProtectedRoute from './middleware/ProtectedPage';
import { toast } from 'react-toastify';
import SinglePost from './pages/SinglePost';

// Call it once in your app. At the root of your app is the best place
toast.configure()

function isAuthenticate() {
  let token = localStorage.getItem('token');
  return token ? true : false;
}

class App extends Component{
  constructor(){
    super();
    this.state={
      isAuthenticate: this.isLogedIn()  // for status of login
    }
  }
  
isLogedIn=()=>{
  let tokenResult = localStorage.getItem('token');
  console.log(tokenResult);
  return tokenResult ? true: false;
}

Login =(e)=>{
  // e.preventDefault();
  //login logic
  this.setState({
    isAuthenticate:true
  })
}

Logout =()=>{
  localStorage.clear('token');
  this.setState({
    isAuthenticate:false
  })
}
render(){
  let { isAuthenticate }= this.state;
  console.log('isAuthenticate', isAuthenticate)
  return (
 <BrowserRouter>
 <Navbar isAuthenticate={isAuthenticate} Logout={this.Logout}/>
 <Switch>
   <Route exact path ="/">
     <Home />
   </Route>

   <ProtectedRoute exact path ="/Dashboard" isAuthenticate={this.state.isAuthenticate}>
     <Dashboard />
   </ProtectedRoute>

   <Route path="/post/:_id">
              <SinglePost />
            </Route>

   <Route exact path ="/Login">
     {
      isAuthenticate ?
     <Redirect to ="/Dashboard"/> : <Login Login={this.Login} />
}
   </Route>
 </Switch>
 </BrowserRouter>
  );
  }
}
export default App;
