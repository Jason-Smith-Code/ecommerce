import './Footer.css';
export const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-block'>
                    <h4 className="footer-heading">Business Name</h4>
                    <a href=".">Address</a>
                    <a href=".">Email</a>
                    <a href=".">Phone</a>
                    <a href=".">About</a>
                </div>
                <div className='footer-block'>
                    <h4 className="footer-heading">My Account</h4>
                    {/* If logged in */}
                    <a href=".">Details</a>
                    <a href=".">My Orders</a>
                    {/* if logged out */}
                    <a href=".">Sign in</a>
                </div>
                <div className='footer-block'>
                    <h4 className="footer-heading">Service</h4>
                    <a href=".">Delivery</a>
                    <a href=".">Payments</a>
                    <a href=".">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    )
}