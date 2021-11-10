import React from 'react';
import {BasicScreen} from './basic/BasicScreen';
import {LinkList} from './ui-parts/LinkList';
import {TouchablesScreen, AnimationScreen} from './various';

const data = [BasicScreen.name, TouchablesScreen.name, AnimationScreen.name];

const Screen: React.FC = () => {
  return <LinkList data={data} />;
};

export const TopScreen = {
  name: 'Top',
  component: Screen,
  options: {
    title: 'Top',
  },
};
