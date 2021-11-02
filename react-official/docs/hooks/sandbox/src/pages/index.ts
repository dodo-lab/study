import React from 'react';

type Page = {
  text: string;
  link: string;
  component: React.FC;
};

export const pages: Page[] = [];
