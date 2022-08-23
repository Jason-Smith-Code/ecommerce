import { products } from "../data/Products";
import { Link } from "react-router-dom";

export const HomePage = () => {
  function displayFeaturedProducts() {
    // if product is marked as featured, display them
    return products.map((product) => {
      return (
        <div className="product-container" key={product._id}>
          {/* Wrap image in link */}
          <img alt="product" width="200px" src={product.image}></img>
          <p>{product.title}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          {/* add link to product page */}
          <button>
            <Link to={product.title}>View product</Link>
          </button>
          <button>Add to cart</button>
        </div>
      );
    });
  }

  return (
    <div className="content-container">
      <section>
        <h1>Store Name</h1>
        <p>Some text about the business</p>
      </section>
      <section>
        <h2>Featured products</h2>
        <div className="products-grid">{displayFeaturedProducts()}</div>
      </section>
    </div>
  );
};
