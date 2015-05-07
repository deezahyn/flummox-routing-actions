'use strict';

import {Actions} from 'flummox';

export default class RoutingActions extends Actions {

  constructor(router) {
    super();

    this.router = router;
  }

  transitionTo(routeName) {
    this.router.transitionTo(routeName);
    return routeName;
  }
}
