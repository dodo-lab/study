import type {NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const links = [
  {name: 'Static Page', href: '/static-page'},
  {name: 'Dynamic Page', href: '/dynamic-page'},
  {name: 'Item Page', href: '/item/1001/sort-by'},
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {links.map(link => (
          <h1 key={link.href} className={styles.title}>
            Go to{' '}
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </h1>
        ))}
      </main>
    </div>
  );
};

export default Home;
