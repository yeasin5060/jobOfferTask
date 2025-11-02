import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages.jsx/Signup";
import Login from "./pages.jsx/Login";
import Home from "./pages.jsx/Home";
import Category from "./pages.jsx/Category";;
import Product from "./pages.jsx/Product";
import MainLayout from "./layOut/MainLayOut";
import NotFound from "./pages.jsx/NotFound";
import Order from "./pages.jsx/Order";

//  All Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/dashboard/products/create" element={<Product />} />
        <Route path="/dashboard/products/order" element={<Order />} />
      </Route>
      <Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App
