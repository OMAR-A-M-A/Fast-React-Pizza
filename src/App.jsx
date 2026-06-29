import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import CreateUser from "./features/user/CreateUser";
import Cart from "./features/cart/Cart";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "user",
        element: <CreateUser></CreateUser>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },

      {
        path: "order/new",
        element: <CreateOrder></CreateOrder>,
      },
      {
        path: "order/:orderId",
        element: <Order></Order>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
