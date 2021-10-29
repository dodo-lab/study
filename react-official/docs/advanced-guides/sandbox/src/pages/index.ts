import React from 'react';
import ContextPage from './context/ContextPage';
import ErrorBoundaryPage from './error-boundary/ErrorBoundaryPage';
import ForwardingRefsPage from './forwarding-refs/ForwardingRefsPage';

type Page = {
  text: string;
  link: string;
  component: React.FC;
};

export const pages: Page[] = [
  { text: 'Context', link: '/context', component: ContextPage },
  {
    text: 'Error Boundary',
    link: '/error-boundary',
    component: ErrorBoundaryPage,
  },
  {
    text: 'Forwarding refs',
    link: '/forwarding-refs',
    component: ForwardingRefsPage,
  },
];
