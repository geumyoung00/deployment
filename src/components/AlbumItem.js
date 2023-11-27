import classes from './AlbumItem.module.css';

function AlbumItem({ album }) {
	const reversedTitle = [...album.title].reverse().join('');
	const textbody = (reversedTitle + ' ').repeat(15);

	return (
		<article className={classes.item}>
			<h1>제목: {album.title}</h1>
			<p>{textbody}</p>
		</article>
	);
}

export default AlbumItem;
