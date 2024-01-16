import { FaPlus } from "react-icons/fa";

interface ProductProps {
 productId: string;
name:string;
price:number;
 stock:number;
photo:string;
quantity:number;
handler:() => void;
}
// const server= "jdndjnccdccmlcm";

const ProdcutCart = ({photo,name,price,handler}: ProductProps) => {
  return (
<div className="product-Card">
    <img src={photo} alt={name} />
        <p>{name}</p>
        <span>₹{price}</span>
        <div>
            <button onClick={()=> handler()}>
                <FaPlus/>
            </button>
        </div>
</div>
  )
}

export default ProdcutCart;