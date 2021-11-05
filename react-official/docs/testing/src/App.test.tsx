import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  let app: RenderResult;

  // テストのセットアップ（各種テストAPI実行前に毎回コールされる）
  beforeEach(() => {
    app = render(<App />);
  });

  // テストの後始末（各種テストAPI実行後に毎回コールされる）
  afterEach(() => {});

  test('renders learn react link', () => {
    // render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(app.queryByText('Learn React')).toBeTruthy();
  });

  test('renders learn react link2', () => {
    // render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
