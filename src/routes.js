import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ListUsersReact from './pages/ListUsersReact'
import ListUsersAngular from './pages/ListUsersAngular'
import ListUsersVue from './pages/ListUsersVue'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/react" component={ListUsersReact} />
        <Route path="/angular" component={ListUsersAngular} />
        <Route path="/vue" component={ListUsersVue} />
      </Switch>
    </BrowserRouter>
  )
}
