import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Exchange from "./pages/exchange/Exchange";
import Market from "./pages/market/Market";
import Wallet from "./pages/wallet/Wallet";
import NotFound from "./pages/notFound/NotFound";
import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

function Routing() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/exchange",
          element: <Exchange />,
        },
        {
          path: "/wallet",
          element: <Wallet />,
        },
        {
          path: "/market",
          element: <Market />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const Elements = () => {
    return useRoutes(routes);
  };

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Elements />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Routing;
