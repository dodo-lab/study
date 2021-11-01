import React from 'react';
import ContextPage from './context/ContextPage';
import ErrorBoundaryPage from './error-boundary/ErrorBoundaryPage';
import ForwardingRefsPage from './forwarding-refs/ForwardingRefsPage';
import HigherOrderComponentsPage from './higher-order-components/HigherOrderComponentsPage';
import PortalPage from './portal/PortalPage';
import ProfilerPage from './profiler/ProfilerPage';
import RefPage from './ref/RefPage';

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
  {
    text: '高階コンポーネント',
    link: '/higher-order-components',
    component: HigherOrderComponentsPage,
  },
  {
    text: 'ポータル',
    link: '/portal',
    component: PortalPage,
  },
  {
    text: 'プロファイラ',
    link: '/profiler',
    component: ProfilerPage,
  },
  {
    text: 'ref',
    link: '/ref',
    component: RefPage,
  },
];
