import { createRoutesFromElements } from 'react-router';
import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import MarketPlace from './pages/MarketPlace';
import Rankings from './pages/Rankings';
import Wallet from './pages/Wallet';
import CreateAccount from './pages/CreateAccount';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="marketplace" element={<MarketPlace />} />
      <Route path="rankings" element={<Rankings />} />
      <Route path="connect-wallet" element={<Wallet />} />
      <Route path="create-account" element={<CreateAccount />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
