import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
function App() {
const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
        <Route element ={<Main/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/shop" element = {<Shop/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/singleproduct" element = {<Singleproduct/>}/>
          <Route path="/cart" element = {<Cart/>}/>
          <Route path="/verified/:email" element = {<Verified/>}/>
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
