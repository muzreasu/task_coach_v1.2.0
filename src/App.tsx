import * as React from 'react';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import Page from './pages';
import { isDev } from "./utils";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Page/>
      </Router>
    );
  }
}

export default isDev() ? hot(module)(App) : App;

