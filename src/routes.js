import App from './App'
import Home from './pages/Home';
import AddTransactions from './pages/AddTransactions';
import Transactions from './pages/Transactions'
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/transactions',
        element: <Transactions />,
      },
      {
        path: '/add-transactions',
        element: <AddTransactions />,
      }
    ]
  }
];

export default routes