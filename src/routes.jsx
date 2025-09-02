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
import { Home, Login, NotFound } from './pages';

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
        <Route element={<PrivateRoutes />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>,
  ),
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
