import React from 'react';
import UseStatePage from './use-state/UseStatePage';
import UseEffectPage from './use-effect/UseEffectPage';

type Page = {
  text: string;
  link: string;
  component: React.FC;
};

export const pages: Page[] = [
  { text: 'use state', link: '/use-state', component: UseStatePage },
  { text: 'use effect', link: '/use-effect', component: UseEffectPage },
];
