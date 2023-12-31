import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
	return (
		<>
			<MainNavigation />
			<main style={{ margin: '2rem' }}>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
