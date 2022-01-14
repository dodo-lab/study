import {GetServerSideProps} from 'next';
import Router from 'next/router';
import React from 'react';

const DynamicPage: React.FC = () => {
  const counter = parseInt(Router.query.counter as string);

  const shallow = () => {
    Router.push(`/shallow-routing?counter=${counter + 10}`, undefined, {shallow: true});
  };

  const notShallow = () => {
    Router.push(`/shallow-routing?counter=${counter + 10}`);
  };

  return (
    <>
      <h1>Shallow Routing</h1>
      <button onClick={shallow}>Shallow</button>
      <button onClick={notShallow}>Not Shallow</button>
      <p>counter : {counter}</p>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  console.log('getServerSideProps');
  return {
    props: {},
  };
};

export default DynamicPage;
