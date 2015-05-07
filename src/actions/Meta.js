'use strict';

export default class MetaActions {
  constructor(context) {
    this.context = context;
  }

  async login(user, pass) {
    const routing = this.context.getActions('routing');
    try {
      const loggedIn = await this.context.getActions('login').login(user, pass);
      routing.transitionTo('loggedin');

    } catch (e) {
      routing.transitionTo('loggedout');
    }
  }
}
