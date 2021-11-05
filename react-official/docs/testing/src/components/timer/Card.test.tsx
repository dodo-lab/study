import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Card from './Card';

let container: HTMLDivElement | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);

  // フェイクタイマー設定
  jest.useFakeTimers();
});

afterEach(() => {
  // cleanup on exiting
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
  container = null;

  // フェイクタイマー解除
  jest.useRealTimers();
});

it('should select null after timing out', () => {
  const onSelect = jest.fn();
  act(() => {
    render(<Card onSelect={onSelect} />, container);
  });

  // 100ミリ秒後、onSelectはコールされない想定
  act(() => {
    jest.advanceTimersByTime(100);
  });
  expect(onSelect).not.toHaveBeenCalled();

  // 5秒後、onSelectは引数nullでコールされている想定
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(onSelect).toHaveBeenCalledWith(null);
});

it('should cleanup on being removed', () => {
  const onSelect = jest.fn();
  act(() => {
    render(<Card onSelect={onSelect} />, container);
  });

  // 100ms後、onSelectはコールされない想定
  act(() => {
    jest.advanceTimersByTime(100);
  });
  expect(onSelect).not.toHaveBeenCalled();

  // Cardがアンマウントされたら、5秒後でもonSelectはコールされない想定
  act(() => {
    render(<></>, container);
  });
  act(() => {
    jest.advanceTimersByTime(5000);
  });
  expect(onSelect).not.toHaveBeenCalled();
});

it('should accept selections', () => {
  const onSelect = jest.fn();
  act(() => {
    render(<Card onSelect={onSelect} />, container);
  });

  // buttonの2をクリックしたら、onSelectは引数2でコールされる想定
  act(() => {
    container
      ?.querySelector("[data-testid='2']")
      ?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(onSelect).toHaveBeenCalledWith(2);
});
