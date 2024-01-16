import { useState } from "react"
import ProdcutCart from "../components/productCard";

const Search = () => {
  const [search, setsearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {}
  const isPrevPage = true;
  const isNextPage = true;
  
  return (
    <div className="product-search-page">
    <aside>
      <h2>Filters</h2>
      <div>
        <h4>Sort by</h4>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="asc">Price (Low to High)</option>
          <option value="desc">Price (High to Low)</option>
        </select>
        </div>
  
  <div>
    <h4>Max Price: {maxPrice || ""}</h4>

    <input type="range" min={100} max={1000} value={maxPrice} />
  </div>

<div>
  <h4>Category</h4>
  <select value={category} onChange={(e) => setCategory(e.target.value)}>
    <option value="">All</option>
    <option value="">Sample1</option>
    <option value="">Sample2</option>
  </select>
</div>
    </aside>
    <main>
      <h1>Products</h1>
      <input type="text" placeholder="Search by Name..." value={search} onChange={(e) => setsearch(e.target.value)} />
    
    <div className="search-products-list">
    <ProdcutCart
          name="Macbook"
          price={120000}
          handler={addToCartHandler} 
          photo="https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg" productId={""} stock={0} quantity={0}   />
          <ProdcutCart
          name="Macbook"
          price={120000}
          handler={addToCartHandler} 
          photo="https://m.media-amazon.com/images/I/71vFKBpKakL._SX522_.jpg" productId={""} stock={0} quantity={0}   />
    </div>
    
    <article>
      <button disabled={!isPrevPage}onClick={() => setPage((prev) => prev - 1)}>Prev</button>
   <span>{page} of {4}</span>
   <button disabled={!isNextPage} onClick = {() => setPage((prev)=> prev+1)}>Next</button>
    </article>
    </main>
    </div>
  )
}

export default Search