import React from 'react';
import UseStatePage from './use-state/UseStatePage';
import UseEffectPage from './use-effect/UseEffectPage';
import CustomHooksPage from './custom-hooks/CustomHooksPage';
import UseLayoutEffectPage from './use-layout-effect/UseLayoutEffectPage';
import UseContextPage from './use-context/UseContextPage';
import UseReducerPage from './use-reducer/UseReducerPage';

type Page = {
  text: string;
  link: string;
  component: React.FC;
};

export const pages: Page[] = [
  { text: 'useState', link: '/use-state', component: UseStatePage },
  { text: 'useEffect', link: '/use-effect', component: UseEffectPage },
  {
    text: 'useLayoutEffect',
    link: '/use-layout-effect',
    component: UseLayoutEffectPage,
  },
  {
    text: 'useContext',
    link: '/use-context',
    component: UseContextPage,
  },
  {
    text: 'useReducer',
    link: '/use-reducer',
    component: UseReducerPage,
  },
  { text: 'custom hooks', link: '/custom-hooks', component: CustomHooksPage },
];
