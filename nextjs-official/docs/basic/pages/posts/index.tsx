import {GetServerSideProps} from 'next';
import React from 'react';
import LinkList from '../../components/parts/LinkList';

type Props = {
  ids: string[];
};

const PostsPage: React.FC<Props> = ({ids}) => {
  const links = ids.map(id => ({name: id, href: `/posts/${id}`}));

  return <LinkList links={links} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const props = (await (await fetch('http://localhost:3000/api/posts/')).json()) as Props;
  return {props};
};

export default PostsPage;
