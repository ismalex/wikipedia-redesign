import Home from "../containers/Home";
import Layout from "../containers/Layout";
import Search from "../containers/Search";

export const routes = [
  {
    path: '/wikipedia-redesign',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'search',
        element: <Search />,
      },
    ],
  },
]