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
import { Home, Login, NotFound, Video } from './pages';

// For the routes that need the user to be logged in
function PrivateRoutes() {
  const auth = true; // This need to be replaced with real authentication logic
  const { pathname: from } = useLocation();
  return !auth ? <Navigate to="/login" state={{ from }} /> : <Outlet />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />{' '}
        <Route path="video" element={<Video />} />
      </Route>
      <Route path="login" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
