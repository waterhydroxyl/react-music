import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import routes from '@/router';

import YLAppHeader from '@/components/app-header';
import YLAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <YLAppHeader />
        {renderRoutes(routes)}
        <YLAppFooter />
      </HashRouter>
    </Provider>
  );
});
