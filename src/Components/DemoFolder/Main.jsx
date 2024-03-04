import Product from "./Product";


export default function Main(props) {
  // products is retrieved from props so it can now be used on page
    const { products, onAdd } = props;
    return (
      // html tag main for main page of website page
      // col-2 2/3 share of screen
      <main className="block col-6">
        <h2>Products</h2>
        <div className="row">
          {/* to render we use name of array with map method  each element of array is now converted to jsx object*/}
          {products.map((product) => (
            // component name set to Product - product is passed as a product to the product component
            // key used to prevent duplication

            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </main>
    );
  }
  