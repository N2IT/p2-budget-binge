import App from './App'
import Home from './components/Home';
import Transactions from './components/Transactions'
import ErrorPage from './components/ErrorPage';
import TransactionFormComp from './components/TransactionFormComp'

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
        path: '/transaction-list',
        element: <Transactions />,
      },
      {
        path: '/add-transactions',
        element: <TransactionFormComp />,
      }
    ]
  }
];

export default routes