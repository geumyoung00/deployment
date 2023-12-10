import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import ProductPage, { loader as albumsLoader } from './pages/Product';
import HomePage from './pages/Home';
// import AlbumPage, { loader as albumLoader } from './pages/Album';
import RootLayout from './pages/Root';
import { lazy, Suspense } from 'react';

const ProductPage = lazy(() => import('./pages/Product'));
const AlbumPage = lazy(() => import('./pages/Album'));

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
          {
            index: true,
            element: (
              <Suspense fallback={<p>Product Page Loading...</p>}>
                <ProductPage />
              </Suspense>
            ),
            loader: () =>
              import('./pages/Product').then((module) => module.loader()),
          },
          // { index: true, element: <ProductPage />, loader: albumsLoader },
          {
            path: ':id',
            element: (
              <Suspense fallback={<p>Album Page Loading...</p>}>
                <AlbumPage />
              </Suspense>
            ),
            loader: ({ params }) =>
              import('./pages/Album').then((module) =>
                module.loader({ params })
              ),
          },
          // { path: ':id', element: <AlbumPage />, loader: albumLoader },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
