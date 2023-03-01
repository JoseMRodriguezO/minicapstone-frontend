export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>price: {product.price}</p>
          <p>description: {product.description}</p>
        </div>
      ))}
    </div>
  );
}
