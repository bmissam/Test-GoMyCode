import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'


import './App.css'

import UserList from './Components/Users/UserList';
import EditUser from './Components/Users/EditUser';
import AddUser from './Components/Users/AddUser';
import RemoveUser from './Components/Users/RemoveUser';
import PhotoList from './Components/Photos/PhotoList';
import AddPhoto from './Components/Photos/AddPhoto';
import RemovePhoto from './Components/Photos/RemovePhoto';
import ModalPicture from './Components/Photos/ModalPhoto';




class App extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = ({
    
    })
  }


  render() {
    return (
      <div>
        <Router>
 
          <Route exact path='/' render = {()=> <UserList/>}/>
         
          <Route path='/add_User/' render = {()=> <AddUser/>}/>
          <Route path='/Edit_User/:id' render = {(props)=> <EditUser id={props.match.params.id}/>}/>
          <Route path='/Remove_User/:id' render = {(props)=> <RemoveUser id={props.match.params.id}/>}/>
          <Route path='/Photos' render = {()=> <PhotoList/>}/>
          <Route path='/Photos/add_Photo/' render = {()=> <AddPhoto/>}/>
          <Route path='/Photos/Remove_Photo/:id' render = {(props)=> <RemovePhoto id={props.match.params.id}/>}/>
          <Route path='/Photos/:id' render = {(props)=> <ModalPicture id={props.match.params.id}/>}/>
         
          
        </Router>
                </div>

        );
  }
}


export default App
