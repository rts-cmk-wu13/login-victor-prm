import { createBrowserRouter } from 'react-router';
import LandingPage from '../views/LandingPage';
import Login from '../views/Login';
import Signup from '../views/SignUp';


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
]);

export default router;