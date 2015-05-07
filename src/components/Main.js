'use strict';

import {default as React, Component} from 'react';
import {RouteHandler} from 'react-router';
import connectToStores from 'flummox/connect';

class Main extends Component {

  constructor(props, context) {
    super(props, context);

    this.triggerInvalidLogin = this.triggerInvalidLogin.bind(this);
    this.triggerValidLogin = this.triggerValidLogin.bind(this);
  }

  triggerInvalidLogin() {
    this.props.metaActions.login('invalid', 'invalid');
  }

  triggerValidLogin() {
    this.props.metaActions.login('valid', 'valid');
  }

  render() {
    return (
      <div>
        <button onClick={this.triggerInvalidLogin}>trigger invalid login</button>
        <button onClick={this.triggerValidLogin}>trigger valid login</button>
        <p>I am the main view!</p>
        <p>The <pre>loggedIn</pre> value of the <pre>SessionStore</pre> is: {this.props.loggedIn ? 'true' : 'false'}</p>
        <RouteHandler />
      </div>
    );
  }
}

export default connectToStores(Main, {
  session: store => ({
    loggedIn: store.isLoggedIn()
  })
});
