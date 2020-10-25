import React from 'react'
import { Nav } from './components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Item, User, Board } from './templates'
import { UserRead, UserRegister, UserUpdate, UserRemove } from './container/user'


const App = () => <>

  <Router>
    <Nav/>
    <Switch>
      <Route path = '/home'component = {Home}/>
      <Redirect exact from = {'/'} to = {'/home'}/>
      <Route path = '/userread'component = {UserRead}/>
      <Route path = '/userregister'component = {UserRegister}/>
      <Route path = '/userupdate'component = {UserUpdate}/>
      <Route path = '/userremove'component = {UserRemove}/>
      <Route path = '/user'component = {User}/>
      <Route path = '/item'component = {Item}/>
      <Route path = '/board'component = {Board}/>
    </Switch>
  </Router>

</>

export default App
