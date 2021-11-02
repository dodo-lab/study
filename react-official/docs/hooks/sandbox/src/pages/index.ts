import React from 'react';
import UseStatePage from './use-state/UseStatePage';

type Page = {
  text: string;
  link: string;
  component: React.FC;
};

export const pages: Page[] = [
  { text: 'use state', link: '/use-state', component: UseStatePage },
];
