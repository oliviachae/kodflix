import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./Gallery";
import Details from "./Details";
import NotFound from "./NotFound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:movieId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
