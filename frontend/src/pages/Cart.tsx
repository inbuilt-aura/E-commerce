import { useEffect, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId:"kscjksfmcxkc",
    photo:"https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg",
    name:"Macbook",
    price:"1,000,00",
    quantity:1,
stock:5
  },
];
const subtotal = 4000;
const tax =  Math.round(subtotal * 0.18);
const shippingCharges = 100;
const discount = 400;
const total = subtotal + tax - shippingCharges+discount; 

const Cart = () => {
  const [coupenCode, setcoupenCode] = useState <string>("");
  const [isValidCoupenCode, setisValidCoupenCode] = useState<boolean>(false);

  useEffect(() => {
    const  id = setTimeout(() => {
      if(Math.random() > 0.5) setisValidCoupenCode(true);
      else setisValidCoupenCode(false);
    }, 1000);
  
    return () => {
    clearTimeout(id);
    setisValidCoupenCode(false);
    }
  }, [coupenCode])
  
  return (
    <div className="cart">
      <main>
        {
cartItems.length> 0 ?(
        cartItems.map((i,index)=> <CartItems key={index} cartItem={i}/>)
        ) : (
          <h1>No items Added</h1>
        )
        }
      </main>
     
      <aside>
        <p>SubTotal:<em>₹{subtotal}</em> </p>
        <p>Tax:<em>₹{tax}</em></p>
        <p>Shipping Charges:<em>₹{shippingCharges}</em></p>
        <p> Discount: <em>₹{discount}</em></p>
          <p>Total:<em> ₹{total} </em> </p>
    
        <input type="text" value={coupenCode} placeholder="Coupen Code"  onChange={(e) => setcoupenCode(e.target.value)} 
        />
        { coupenCode &&  (isValidCoupenCode ? (
          <span className="green">
            ₹{discount} off using <code>{coupenCode}</code>
          </span>
        ) : (
          <span className="red">
            Invalid Coupen <BiErrorCircle />
          </span>
        )) }

        {
        cartItems.length > 0 &&  <Link to= "/shipping">Checkout</Link>
        }
      </aside>
      </div>
    
  )
}

export default Cart                                            