import {GetServerSideProps} from 'next';
import React, {useEffect} from 'react';

type Props = {
  name: string;
  host?: string;
  test?: string;
};

const DynamicPage: React.FC<Props> = ({name, host, test}) => {
  useEffect(() => {
    console.log('useEffect dynamic');
  }, []);
  return (
    <>
      <h1>Dynamic Page</h1>
      <p>{name}</p>
      <p>{host}</p>
      <p>{test}</p>
      <p>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  console.log('getServerSideProps');
  const user = await (await fetch('http://localhost:3000/api/user')).json();
  const name = user.name as string;

  return {
    props: {
      name,
      host: process.env.DB_HOST,
      test: process.env.DEV_TEST,
    },
  };
};

export default DynamicPage;
