import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';

import Create from "./components/Create";
import Delete from "./components/Delete";
import Update from "./components/Update";
/* import newUp from "./components/newUp"; */
import Navigation from "./components/Navigation";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
          <Route path="/" component={Create} exact />
          <Route path="/delete" component={Delete} />
          <Route path="/update" component={Update} />
{/*           <Route path="/newUp" render={newUp} /> */}

      />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
