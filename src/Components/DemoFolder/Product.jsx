


export default function Product(props) {
  // we get product from props
    const { product, onAdd } = props;
    return (
      <div>
        {/* small image implemented - see css */}
        <img className="small" src={product.image} alt={product.name} />
        {/* show product name and price on page */}
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
          {/* add to cart button */}
          {/* parent of product is main -onAdd needs to be passed as prop  through levels displayDemo, main then product  */}
          <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
      </div>
    );
  }
  