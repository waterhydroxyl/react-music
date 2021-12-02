import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import YLThemeHeaderRCM from '@/components/theme-header-rcm';
import YLSongsCover from '@/components/songs-cover';
import { HotRecommendWrapper } from './style';
import { getHotRecommendAction } from '../../store/actionCreators';

// import {HOT_RECOMMEND_LIMIT} from '@/common/constants';
// import { HOT_RECOMMEND_LIMIT } from '@/common/contants';

export default memo(function HYHotRecommend() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <YLThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '民谣', '摇滚', '电子']} />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <YLSongsCover key={item.id} info={item} showCoverSource={false}/>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
