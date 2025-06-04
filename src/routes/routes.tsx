import { createBrowserRouter } from 'react-router';
import LandingPage from '../views/LandingPage';
import Login from '../views/Login';
import Signup from '../views/SignUp';
import Secrets from '../views/Secrets';
import RequireAuth from '../context/RequireAuth';
import CheckLogin from '../context/CheckLogin';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: (
      <CheckLogin>
        <Login />
      </CheckLogin>
    )
  },
  {
    path: "/signup",
    element: (
      <CheckLogin>
        <Signup />
      </CheckLogin>
    )
  },
  {
    path: "/secrets",
    element: (
      <RequireAuth>
        <Secrets />
      </RequireAuth>
    )
  }
]);

export default router;