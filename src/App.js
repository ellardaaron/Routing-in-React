import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Films from './Components/Films';
import People from './Components/People';
import PeopleID from './Components/PeopleID';
import FilmID from './Components/FilmID';


export class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Link to="/"><button type="button">Home</button></Link>
          <Link to="/films"><button type="button">Films</button></Link>
          <Link to="/people"><button type="button">People</button></Link>
          <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/films' component = {Films}/>
            <Route exact path = '/people' component = {People}/>
            <Route exact path = '/people/:id' component = {PeopleID}/>
            <Route exact path = '/films/:id' component = {FilmID}/>
          </Switch>
        </>
      </Router>
    )
  }
}

export default App

