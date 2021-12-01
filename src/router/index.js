import YLDiscover from '@/pages/discover';
import YLFriend from '@/pages/friend';
import YLMine from '@/pages/mine';
import YLPlayer from '@/pages/player';

const routes = [
  {
    path: '/',
    exact: true,
    component: YLDiscover,
  },
  {
    path: '/friend',
    component: YLFriend
  },
  {
    path: '/mine',
    component: YLMine
  },
  {
    path: '/player',
    component: YLPlayer
  },
];

export default routes;
