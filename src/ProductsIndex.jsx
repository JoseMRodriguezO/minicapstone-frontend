import { useState } from "react";
export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>All Products</h1>
      Search:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.products.map((product) => (
          <option key={product.id} value={product.name}></option>
        ))}
      </datalist>
      {props.products
        .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
            {<img src={product.images[0].url} alt="" />}
            <button onClick={() => props.onShowProduct(product)}>More info</button>
          </div>
        ))}
    </div>
  );
}
// need to add images
