import React, { memo, useEffect } from 'react';
// import { connect } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';

function YLRecommend(props) {
  // const { getBanners, topBanners } = props;
  // useEffect(() => {
  //   getBanners();
  // }, [getBanners]);

  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.get('topBanners'),
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <div>
      <h2>wwww</h2>

      <h2>{topBanners.length}</h2>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.get('topBanners'),
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(YLRecommend));
export default memo(YLRecommend);
