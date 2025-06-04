import { createBrowserRouter } from 'react-router';
import LandingPage from '../views/LandingPage';
import Login from '../views/Login';
import Signup from '../views/SignUp';
import Secrets from '../views/Secrets';
import RequireAuth from '../context/RequireAuth';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/secrets",
    element: (
      <RequireAuth>
        <Secrets />
      </RequireAuth>
    )
  },
]);

export default router;