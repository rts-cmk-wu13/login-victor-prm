import { createBrowserRouter } from 'react-router';
import LandingPage from '../views/LandingPage';
import Login from '../views/Login';
import SignUp from '../views/SignUp';


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
    element: <SignUp />,
  },
]);

export default router;