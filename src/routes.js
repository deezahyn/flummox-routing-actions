'use strict';

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import Main from './components/Main';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/LoggedOut';


export default (
  <Route path="/" handler={Main}>
    <Route path="loggedin" name="loggedin" handler={LoggedIn} />
    <Route path="loggedout" name="loggedout" handler={LoggedOut} />
  </Route>
);
