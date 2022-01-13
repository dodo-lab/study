import {GetServerSideProps} from 'next';
import React, {useEffect} from 'react';

type Props = {
  host?: string;
  test?: string;
};

const DynamicPage: React.FC<Props> = ({host, test}) => {
  useEffect(() => {
    console.log('useEffect dynamic');
  }, []);
  return (
    <>
      <h1>Dynamic Page</h1>
      <p>{host}</p>
      <p>{test}</p>
      <p>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  console.log('getServerSideProps');
  return {
    props: {
      host: process.env.DB_HOST,
      test: process.env.DEV_TEST,
    },
  };
};

export default DynamicPage;
