export function ProductsShow(props) {
  return (
    <div>
      <h1>Products Info</h1>
      <h2>{props.product.name}</h2>
      <p>price: {props.product.price}</p>
      <p>description: {props.product.description}</p>
    </div>
  );
}
