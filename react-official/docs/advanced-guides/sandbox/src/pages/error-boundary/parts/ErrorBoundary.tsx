import React, { ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  error: Error | null;
};

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = { error: null };

  public static getDerivedStateFromError(error: Error): State {
    console.log('getDerivedStateFromError', error);
    // 次のレンダリングでフォールバックUIが表示されるよう、状態を更新する
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('componentDidCatch, Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.error) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
