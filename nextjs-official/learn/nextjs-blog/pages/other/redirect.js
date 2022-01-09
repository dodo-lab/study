export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/',
      permanent: true, // triggers 308
    },
  };
}

export default function Redirect() {
  return (
    <>
      <h1>Redirect</h1>
    </>
  );
}
