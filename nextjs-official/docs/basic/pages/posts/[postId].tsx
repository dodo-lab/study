import {GetServerSideProps} from 'next';
import React from 'react';

type Props = {
  content: string;
};

const PostPage: React.FC<Props> = ({content}) => {
  return <h1>{content}</h1>;
};

type Query = {
  postId: string;
};
export const getServerSideProps: GetServerSideProps<Props, Query> = async context => {
  const url = `http://localhost:3000/api/posts/${context.params?.postId}`;
  const props = (await (await fetch(url)).json()) as Props;
  return {props};
};

export default PostPage;
