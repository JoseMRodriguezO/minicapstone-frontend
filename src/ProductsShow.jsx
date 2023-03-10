export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h1>Products Info</h1>
      <h2>{props.product.name}</h2>
      <p>price: {props.product.price}</p>
      <p>description: {props.product.description}</p>
      <p>Supplier: {props.product.supplier_id}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          price: <input defaultValue={props.product.price} name="price" type="text" />
        </div>
        <div>
          description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>

        <button type="submit">Update product</button>
      </form>
      <button onClick={handleClick}>Destroy Product</button>
    </div>
  );
}
