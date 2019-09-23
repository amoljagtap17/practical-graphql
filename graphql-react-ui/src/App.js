import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Login from './login'
import Register from './Register'

const App = () => (
  <Router>
    <Navigation />
    <hr />
    <div className="container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  </Router>
)

export default App
