import {GetServerSideProps} from 'next';
import React from 'react';

type Props = {
  all: string[];
};

const ItemPage: React.FC<Props> = ({all}) => {
  return (
    <>
      <h1>Item Page</h1>
      <p>{all}</p>
    </>
  );
};

type Query = {
  all: string[];
};

export const getServerSideProps: GetServerSideProps<Props, Query> = async context => {
  const all = context.params?.all || [''];

  return {
    props: {
      all,
    },
  };
};

export default ItemPage;
