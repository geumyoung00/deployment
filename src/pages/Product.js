import { useLoaderData } from 'react-router-dom';

import AlbumList from '../components/AlbumList';

function ProductPage() {
  const albums = useLoaderData();

  return <AlbumList albums={albums} />;
}

export default ProductPage;

export async function loader() {
  return fetch('https://jsonplaceholder.typicode.com/albums');
}
