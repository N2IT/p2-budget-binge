import Home from './pages/Home';
import AddTransactions from './pages/AddTransactions';
import Transactions from './pages/Transactions'
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/transactions',
    element: <Transactions />,
    errorElement: <ErrorPage />
  },
  {
    path: '/add-transactions',
    element: <AddTransactions />,
    errorElement: <ErrorPage />
  }
];

export default routes