import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '@/common/local-data';

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default memo(function YLAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink key={item.title} to={item.link}>
          {item.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      );
    } else {
      return (
        <a key={item.title} href={item.link}>
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      {/*
      <NavLink to="/">Home</NavLink>
      <NavLink to="/friend">friend</NavLink>
      <NavLink to="/mine">mine</NavLink> */}

      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input placeholder="搜索" className="search" prefix={<SearchOutlined />} />
          <div className="center" > 创作者中心 </div>
          <div className='login'>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
