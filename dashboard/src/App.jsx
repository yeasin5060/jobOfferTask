import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages.jsx/Signup";
import Login from "./pages.jsx/Login";
import Home from "./pages.jsx/Home";
import User from "./pages.jsx/User";
import Variation from "./pages.jsx/Variation";
import Category from "./pages.jsx/Category";
import SubCategory from "./pages.jsx/SubCategory";
import Product from "./pages.jsx/Product";
import Inventory from "./pages.jsx/Inventory";
import Cart from "./pages.jsx/Cart";
import MainLayout from "./layOut/MainLayOut";
import NotFound from "./pages.jsx/NotFound";

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
        <Route path="/users" element={<User />} />
        <Route path="/variations" element={<Variation />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/sub-category" element={<SubCategory/>} />
        <Route path="/products" element={<Product />} />
        <Route path="/inventories" element={<Inventory />} />
        <Route path="/carts" element={<Cart />} />
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
