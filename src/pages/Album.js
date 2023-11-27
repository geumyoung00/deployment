import { useLoaderData } from 'react-router-dom';

import AlbumItem from '../components/AlbumItem';

function AlbumPage() {
	const album = useLoaderData();

	return <AlbumItem album={album} />;
}

export default AlbumPage;

export function loader({ params }) {
	const albumId = params.id;
	return fetch('https://jsonplaceholder.typicode.com/albums/' + albumId);
}
