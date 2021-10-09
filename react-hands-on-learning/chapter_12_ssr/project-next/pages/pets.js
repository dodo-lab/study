import fetch from 'isomorphic-fetch';
import Layout from './Layout';

export default function Pets({ pets }) {
  return (
    <Layout>
      <div>
        <h1>Pets!</h1>
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

Pets.getInitialProps = async function () {
  const res = await fetch(`http://pet-library.moonhighway.com/api/pets`);
  const data = await res.json();
  return {
    pets: data,
  };
};
