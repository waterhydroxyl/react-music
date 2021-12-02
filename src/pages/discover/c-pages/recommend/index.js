import React, { memo} from 'react';


import YLTopBanner from './c-cpns/top-banner';
import YLHotRecommend from './c-cpns/hot-recommend';

import { Content, RecommendWrapper,RecommendLeft,RecommendRight } from './style';

function YLRecommend(props) {

  return (
    <RecommendWrapper>
      <YLTopBanner></YLTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
        <YLHotRecommend/>

        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(YLRecommend);
