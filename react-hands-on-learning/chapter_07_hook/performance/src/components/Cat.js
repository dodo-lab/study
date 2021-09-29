import React, { memo } from 'react';

export default function Cat({ name }) {
  console.log(`rendering Cat : ${name}`);

  return <>{name} / </>;
}

export const PureCat = memo(Cat);
