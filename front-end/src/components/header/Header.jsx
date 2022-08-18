import './Header.css';

export const Header = () => {
    return (
        <header>
            <div className="header-top">
                {/* Display phone number from contact field in admin */}
                <p>phone number</p>
                <div className='header-social-icon-container'>
                    {/* Depending on admin settings, display social links */}
                </div>
            </div>
            <div className='header-main'>
                {/* Logo */}
                <p>Logo</p>
                <div className='header-main-right'>
                    {/* Basket */}
                    <p className="basket">Basket</p>
                    {/* Login / Register */}
                    <p>Login / Register</p>
                </div>
            </div>
            <div className='header-nav'>
                {/* Navigation */}
                <p>Navigation items go here</p>
            </div>
        </header>
    )
}