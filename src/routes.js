import App from './App'
import Home from './pages/Home';
import AddTransactions from './pages/AddTransactions';
import Transactions from './pages/Transactions'
import ErrorPage from './pages/ErrorPage';
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