import { Link } from "react-router-dom";
import ImageSlider from "./Carousel";
import ProdcutCart from "../components/productCard";

const Home = () => {
  const addToCartHandler = () => {};

  const slides = [
    { url:"/assets/women3.webp", href:"/search" },
    { url: "/assets/women2.png", href:"/search" },
    { url: "/assets/women1.jpg", href:"/search" },
  ];

  return (
    <>
      <div className="home">
        <ImageSlider slides={slides} autoPlay={true} />
        <h1>
          Latest Products
          <Link to="/search" className="find">
            {" "}
            More
          </Link>
        </h1>
          <ProdcutCart
          name="Macbook"
          price={120000}
          handler={addToCartHandler} 
          photo="https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg" productId={""} stock={0} quantity={0}          />

      </div>

    
    </>
  );
};

export default Home;
