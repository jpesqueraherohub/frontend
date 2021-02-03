import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NextPage from './NextPage'
import Form from './Form'

export default class Route extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/NextPage" component={NextPage}/>
          <Route path="/" component={Form}/>
        </Switch>
      </Router>
    )
  }
}
