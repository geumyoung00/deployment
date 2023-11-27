import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProductPage, { loader as albumsLoader } from './pages/Product';
import HomePage from './pages/Home';
import AlbumPage, { loader as albumLoader } from './pages/Album';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'albums',
				children: [
					{ index: true, element: <ProductPage />, loader: albumsLoader },
					{ path: ':id', element: <AlbumPage />, loader: albumLoader },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
