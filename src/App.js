import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from '@/router';

import YLAppHeader from '@/components/app-header';
import YLAppFooter from '@/components/app-footer';

export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <YLAppHeader />
        {renderRoutes(routes)}
        <YLAppFooter />
      </HashRouter>
    </div>
  );
});
