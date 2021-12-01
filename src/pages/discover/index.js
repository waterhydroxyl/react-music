import React, { memo } from 'react';

import { dicoverMenu } from '@/common/local-data';

import { DiscoverWrapper, TopMenu } from './style';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default memo(function YLDiscoverPage(props) {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="warp-v1">
          {dicoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});
