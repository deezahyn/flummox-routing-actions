'use strict';

import Promise from 'bluebird';
import {Actions} from 'flummox';

export default class LoginActions extends Actions {
  async login(username, password) {
    return await Promise.delay(500)
      .then(() => {
        if (username === 'valid' && password === 'valid') {
          return {loggedIn: true};
        }

        throw new Error('login invalid');
      });
  }
}
