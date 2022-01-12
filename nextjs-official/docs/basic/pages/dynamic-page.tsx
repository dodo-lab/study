import {GetServerSideProps} from 'next';
import React, {useEffect} from 'react';

type Props = {
  message: string;
};

const DynamicPage: React.FC<Props> = ({message}) => {
  useEffect(() => {
    console.log('useEffect dynamic');
  }, []);
  return (
    <>
      <h1>Dynamic Page</h1>
      <p>{message}</p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  console.log('getServerSideProps');
  return {
    props: {
      message: 'server-side',
    },
  };
};

export default DynamicPage;
