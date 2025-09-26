import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom';

import { AppLayout } from './layouts';
import { Home, Video } from './pages';
import { Footer } from './components/common';

function HasFooterRoutes() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<HasFooterRoutes />}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />{' '}
        </Route>
      </Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="video" element={<Video />} />
      </Route>
    </Route>,
  ),
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
