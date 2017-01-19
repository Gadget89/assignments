import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Home from './Home'
import Details from './Details'

render(
  (
    <Router history={hashHistory}>
      <Route component={ App }>
        <Route path="/" component={ Home } />
        <Route path="/Details/:name/:email/:phone/:location" component={ Details } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
