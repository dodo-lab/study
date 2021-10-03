import ErrorBoundary, { BreakThings } from './components/ErrorBoundary';
import SiteLayout from './components/SiteLayout';

const Callout = ({ children }) => <div className="callout">{children}</div>;

function App() {
  return (
    <SiteLayout
      menu={
        <ErrorBoundary>
          <p>Menu</p>
        </ErrorBoundary>
      }
    >
      <ErrorBoundary>
        <Callout>Callout</Callout>
      </ErrorBoundary>
      <ErrorBoundary>
        <h1>Contents</h1>
        <p>This is the main part of the example layout</p>
        <BreakThings />
      </ErrorBoundary>
    </SiteLayout>
  );
}

export default App;
