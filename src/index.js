'use strict';

import 'babel/polyfill';
import React from 'react';

import createContext from './createContext';
import createRouter from './createRouter';
import createMetaActions from './createMetaActions';

const router = createRouter();
const ctx = createContext({router});
const metaActions = createMetaActions(ctx);
const appContainer = document.getElementById('app');

router.run((Handler, state) => {
  React.render(
    <Handler key='app' flux={ctx} metaActions={metaActions}/>, appContainer);
});
