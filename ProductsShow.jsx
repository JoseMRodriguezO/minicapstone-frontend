export function ProductsShow(props) {
  return (
    <div>
      <h1>Products Info</h1>
      <h2>{props.product.name}</h2>
      <p>price: {props.product.price}</p>
      <p>description: {props.product.description}</p>
      <form>
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
    </div>
  );
}
