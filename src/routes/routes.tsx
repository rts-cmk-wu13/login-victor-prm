import { createBrowserRouter } from 'react-router';
import App from '../views/App';
import Login from '../views/Login';
import SignUp from '../views/SignUp';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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