import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Image
        src="/images/profile.jpg"
        width={144}
        height={144}
        alt="Your Name"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
