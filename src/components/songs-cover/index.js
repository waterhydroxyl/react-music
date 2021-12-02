import React, { memo } from 'react';

import { getCount, getSizeImage } from '@/utils/format-utils';

import { SongsCoverWrapper } from './style';

export default memo(function HYSongsCover(props) {
  const { info, showCoverSource } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">{info.name}</div>
      <div
        className="cover-source text-nowrap"
        style={{ display: showCoverSource ? 'block' : 'none' }}
      >
        by {info.copywriter}
      </div>
    </SongsCoverWrapper>
  );
});
