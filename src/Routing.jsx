import Layout from "./layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Exchange from "./pages/exchange/Exchange";
import Market from "./pages/market/Market";
import Wallet from "./pages/wallet/Wallet";
import NotFound from "./pages/notFound/NotFound";
import Login from "./shared/login/Login";
import Resgister from "./shared/register/Register";
import ForgotPassword from "./shared/forgotPassword/ForgotPassword";
import Loading from "./shared/loading/Loading";
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
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Resgister />,
    },
    {
      path: "/forgot",
      element: <ForgotPassword />,
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
        <Suspense fallback={<Loading />}>
          <Elements />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default Routing;
