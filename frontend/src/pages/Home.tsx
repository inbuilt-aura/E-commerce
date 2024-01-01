import { Link } from 'react-router-dom';
import ImageSlider from './Carousel';


const Home= () =>{
  const slides = [
    { url: "/assets/women1.jpg", title: "beach" },
    { url: "/assets/women2.png", title: "boat" },
    { url: "/assets/women3.webp", title: "forest" },
  ];



 return(
  <>
  <div className="home">


  <ImageSlider slides={slides} />



<h1>Latest Products
<Link to ="/search" className='find'> More</Link>
</h1>
</div>
  </>

  );
};
 
export default Home;
