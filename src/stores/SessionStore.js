'use strict';

import {Store} from 'flummox';

export default class SessionStore extends Store {
  constructor({ loginActions, routingActions }) {
    super();

    this.registerAsync(
      loginActions.login,
      this.handleLogin,
      this.handleLoginSuccess,
      this.handleLoginFailure
    );

    this.register(routingActions.transitionTo, this.handleRouteTransition);

    this.state = {
      isLoggedIn: false
    };
  }

  handleRouteTransition(action) {
    console.log('SessionStore', 'transitioning to', action);
  }

  handleLogin(action) {
    console.log('SessionStore', action);
  }

  handleLoginSuccess(isLoggedIn) {
    console.log('SessionStore', 'login success');
    this.setState({
      isLoggedIn
    });
  }

  handleLoginFailure(error) {
    console.log('SessionStore', 'login failure', error);
    this.setState({
      isLoggedIn: false
    });
  }

  isLoggedIn() {
    return this.state.isLoggedIn;
  }

}
