import "bootstrap/dist/css/bootstrap.css";
import jQuery from "jquery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/Products/ProductDetail";
import ProductAdd from "./pages/Products/ProductAdd";

export default function App() {
  // const [total, setTotal] = useState(0);

  // const increase = () => {
  //   setTotal(total+1);
  // }
  // const decrease = () => {
  //   setTotal(total-1);
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Homepage}></Route>
        <Route path="/products" Component={Products}></Route>
        <Route path="/products/add" Component={ProductAdd}></Route>
        <Route path="/products/:id" Component={ProductDetail}></Route>
        <Route path="*" Component={<div>Not found</div>}></Route>
      </Routes>
      {/* //   <button className="btn btn-primary">Click Me!</button>
    // <>
    // <Navbar name="asdqwgkm"/>
    //   <div>
    //     <p>{total}</p>
    //     <button onClick={increase}>Arttır</button>
    //     <button onClick={decrease}>Azalt</button>
    //   </div>

    //   <ProductCard name="Asus" price={10000}/>
    //   <ProductCard name="Acer" price={5000}/>
    //   <ProductCard name="HP" price={12000}/> */}
    </BrowserRouter>
  );
}
