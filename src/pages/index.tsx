import * as React from 'react';
import { Redirect, Route as LibRoute, Switch } from 'react-router-dom';
import Board from './dashboard';

const Route = () => {
  return (
    <Switch>
      <LibRoute path='/home' component={Board} />
      <Redirect exact={true} from='/' to='/home' />
    </Switch>
  );
};

export default Route;
