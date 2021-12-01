import YLDiscover from '@/pages/discover';
import YLFriend from '@/pages/friend';
import YLMine from '@/pages/mine';
import YLPlayer from '@/pages/player';

import YLRecommend from '../pages/discover/c-pages/recommend';
import YLArtist from '../pages/discover/c-pages/artist';
import YLAlbum from '../pages/discover/c-pages/album';
import YLDjradio from '../pages/discover/c-pages/djradio';
import YLRanking from '../pages/discover/c-pages/ranking';
import YLSongs from '../pages/discover/c-pages/songs';

import { Redirect } from 'react-router';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: YLDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: YLRecommend,
      },
      {
        path: '/discover/ranking',
        component: YLRanking,
      },
      {
        path: '/discover/songs',
        component: YLSongs,
      },
      {
        path: '/discover/djradio',
        exact: true,
        component: YLDjradio,
      },
      {
        path: '/discover/artist',
        component: YLArtist,
      },
      {
        path: '/discover/album',
        component: YLAlbum,
      },
      {
        path: '/discover/player',
        component: YLPlayer,
      },
    ],
  },
  {
    path: '/friend',
    component: YLFriend,
  },
  {
    path: '/mine',
    component: YLMine,
  },
  {
    path: '/player',
    component: YLPlayer,
  },
];

export default routes;
