import React from 'react';
import {ScrollViewAnimationScreen} from './ScrollViewAnimationScreen';
import {SimpleAnimationScreen} from './SimpleAnimationScreen';
import {LinkList} from 'screens/ui-parts/LinkList';

const data = [SimpleAnimationScreen.name, ScrollViewAnimationScreen.name];

const Screen: React.FC = () => {
  return <LinkList data={data} />;
};

export const AnimationsScreen = {
  name: 'Animations',
  component: Screen,
  options: {
    title: 'Animations',
  },
};
