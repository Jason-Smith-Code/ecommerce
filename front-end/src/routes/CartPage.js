import { getCartList } from "../features/products/cartSlice";
import { useSelector } from "react-redux";
import { CartList } from "../components/product/CartList";

export const CartPage = () => {
  const cartProducts = useSelector(getCartList);
  // stores an array of objects containng the productid and the orderQuantity

  // map through though the cart product ids and quantites into a cart list component
  const mappedCartList = cartProducts.cartItems.map((product) => {
    return (
      <CartList
        key={product.id}
        id={product.id}
        orderQuantity={product.orderQuantity}
      />
    );
  });

  return (
    <div className="content-container">
      <div id="my-cart">
        <h1>My Cart</h1>
        {/* {cartProducts.products[0].id} */}
        <div className="cart-list-container">{mappedCartList}</div>
      </div>
      <div id="cart-checkout-card">
        <h3>Total</h3>
      </div>
    </div>
  );
};
