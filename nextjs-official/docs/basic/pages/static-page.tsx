import {GetStaticProps} from 'next';
import React, {useEffect} from 'react';

type Props = {
  message: string;
};

const StaticPage: React.FC<Props> = ({message}) => {
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <>
      <h1>Static Page</h1>
      <p>{message}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  console.log('getStaticProps');
  return {
    props: {
      message: 'hello',
    },
  };
};

export default StaticPage;
