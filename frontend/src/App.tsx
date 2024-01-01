import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { lazy,Suspense } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";
const Home = lazy(() => import("./pages/Home")) ;
const Search = lazy(() => import("./pages/Search")) ;
const Cart = lazy(() => import("./pages/Cart")) ;

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
    </Routes>
  </Suspense>
  </Router>
)
}
export default App;