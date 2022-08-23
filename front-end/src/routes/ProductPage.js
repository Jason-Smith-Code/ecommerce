export const ProductPage = ({ product }) => {
  return (
    <div className="content-container">
      <div>
        <div>
          <p>product page</p>
          <img alt={product.title} src={product.image}></img>
          <h1>{product.title}</h1>
        </div>
      </div>
    </div>
  );
};
