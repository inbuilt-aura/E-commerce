import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { lazy,Suspense } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Signup from "./pages/signup";

const Home = lazy(() => import("./pages/Home")) ;
const Search = lazy(() => import("./pages/Search")) ;
const Cart = lazy(() => import("./pages/Cart")) ;
const Shipping =  lazy(() => import("./pages/shipping"));
const Login =  lazy(() => import("./pages/login"));

const App= () =>{
return(
  <Router>
    {/*Header */}
   <Header/>
  <Suspense fallback={<Loading/>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<Signup/>}/>

      {/* Login User  Routes*/}
      <Route>
      <Route path="/shipping" element={<Shipping/>}/>

      </Route>
    </Routes>
  </Suspense>
  </Router>
)
}
export default App;