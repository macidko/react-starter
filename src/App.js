import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Homepage from "./pages/Homepage/Homepage";

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
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="*" element={<div>Not Found</div>}></Route>
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
