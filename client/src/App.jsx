import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Main from "./layOut/Main";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";

function App() {
const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
        <Route element ={<Main/>}>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/shop" element = {<ShopPage/>}/>
           <Route path="/about" element = {<AboutPage/>}/>
          <Route path="/contact" element = {<ContactPage/>}/>
          <Route path="/cart" element = {<CartPage/>}/>
        </Route>
     </Route>
    )
  );
  return (
    <RouterProvider 
      router={router}
    />
  )
}

export default App
