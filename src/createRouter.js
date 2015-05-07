'use strict';

import Router from 'react-router';

import routes from './routes';

export default ({location = Router.HashLocation, onAbort, onError} = {}) => {
  return Router.create({
    routes,
    location,
    onAbort,
    onError,
  });
};
