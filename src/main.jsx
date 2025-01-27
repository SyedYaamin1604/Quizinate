import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import Layout from './Layout.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Quiz from './Pages/Quiz/Quiz.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Home from './Pages/Home/Home.jsx';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
