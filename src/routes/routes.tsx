import { createBrowserRouter } from 'react-router';
import LandingPage from '../views/LandingPage';
import Login from '../views/Login';
import Signup from '../views/SignUp';
import Secrets from '../views/Secrets';
import RequireAuth from '../context/RequireAuth';
import CheckLogin from '../context/CheckLogin';
import { fetchFromSecretAPI } from '../utils';


//const { token } = useAuth();
const rawToken = sessionStorage.getItem("token");
const token: string | null = rawToken ? JSON.parse(rawToken) : null;

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
    ),
    loader: () => fetchFromSecretAPI("secrets", token)
  }
]);

export default router;