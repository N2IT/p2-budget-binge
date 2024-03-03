import App from './App'
import Home from './components/Home';
import Transactions from './components/Transactions'
import ErrorPage from './components/ErrorPage';
import AddTransacction from './components/AddTransaction'
import ClickMe from './components/ClickMe'
import ClickMeSample from './components/ClickMeSample'

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
        element: <AddTransacction />,
      }
    ]
  },
  {
    path: '/click-me',
    element: <ClickMe />
  },
  {
    path: '/click-me-sample',
    element: <ClickMeSample />
  }
];

export default routes