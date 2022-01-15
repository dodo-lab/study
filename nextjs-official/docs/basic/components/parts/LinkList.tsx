import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  links: {
    name: string;
    href: string;
  }[];
};

const LinkList: React.FC<Props> = ({links}) => {
  console.log(links);
  return (
    <>
      {links.map((link, index) => (
        <p key={index} className={styles.title}>
          Go to{' '}
          <Link href={link.href}>
            <a>{link.name}</a>
          </Link>
        </p>
      ))}
    </>
  );
};

export default LinkList;
