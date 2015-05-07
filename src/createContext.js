'use strict';

import {Flummox} from 'flummox';
import Actions from './actions/';
import Stores from './stores/';

class Context extends Flummox {

  constructor({router}) {
    super();
    const routingActions = this.createActions('routing', Actions.Routing, router);
    const loginActions = this.createActions('login', Actions.Login);
    this.createStore('session', Stores.Session, {loginActions, routingActions});
  }

}

export default (options) => {
  return new Context(options);
};
