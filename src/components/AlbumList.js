import { Link } from 'react-router-dom';

import classes from './AlbumList.module.css';

function AlbumList({ albums }) {
	return (
		<ul className={classes.list}>
			{albums.map((album) => (
				<li key={album.id}>
					<Link to={album.id.toString()}>{album.title}</Link>
				</li>
			))}
		</ul>
	);
}

export default AlbumList;
