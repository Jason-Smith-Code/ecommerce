import './Footer.css';
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-block'>
                    <h4 className="footer-heading">Business Name</h4>
                    <p>business address</p>
                    <p>business email address</p>
                    <p>business phone</p>
                </div>
                <div className='footer-block'>
                    <h4 className="footer-heading">My Account</h4>
                    {/* if logged out */}
                    <Link to="/sign-in">Sign in / Register</Link>
                    {/* If logged in */}
                    <Link to="/account">My Details</Link>
                    <Link to="/orders">Orders</Link>
                </div>
                <div className='footer-block'>
                    <h4 className="footer-heading">Service</h4>
                    <Link to="/delivery">Delivery</Link>
                    <Link to="/payments">Payments</Link>
                    <Link to="/terms-conditions">Terms and Conditions</Link>
                </div>
                <div className='footer-block'>
                    <h4 className="footer-heading">Navigation</h4>
                    <Link to="/">Main</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/checkout">Checkout</Link>
                </div>
            </div>
        </footer>
    )
}