import React from 'react';
import ErrorBoundary, { BreakThings } from './components/ErrorBoundary';
import SiteLayout from './components/SiteLayout';

const Menu = () => (
  <ErrorBoundary>
    <p style={{ color: 'white' }}>TODO: Build Menu</p>
  </ErrorBoundary>
);

const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);

export default function Main() {
  return (
    <SiteLayout menu={<Menu />}>
      <Callout>Callout</Callout>
      <ErrorBoundary>
        <h1>TODO: Home Page</h1>
        <p>Complete the main contents for this home page</p>
      </ErrorBoundary>
    </SiteLayout>
  );
}
