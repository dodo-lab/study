import React from 'react';
import UseStatePage from './use-state/UseStatePage';
import UseEffectPage from './use-effect/UseEffectPage';
import CustomHooksPage from './custom-hooks/CustomHooksPage';

type Page = {
  text: string;
  link: string;
  component: React.FC;
};

export const pages: Page[] = [
  { text: 'use state', link: '/use-state', component: UseStatePage },
  { text: 'use effect', link: '/use-effect', component: UseEffectPage },
  { text: 'custom hooks', link: '/custom-hooks', component: CustomHooksPage },
];
