export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          price: <input name="price" type="text" />
        </div>
        <div>
          description: <input name="description" type="text" />
        </div>
        <div>
          Image_url: <input name="image_url" type="text" />
        </div>
        <div>
          SupplierId: <input name="supplier_id" type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
