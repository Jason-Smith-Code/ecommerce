import { products } from "../data/Products"

export const HomePage = () => {

    function displayFeaturedProducts() {
        // if product is marked as featured, display them
        return products.map(product => {
            return (
                <div key={product._id}>
                    <img alt="product" src={product.image}></img>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            )
        })
    }


    return (
        <div className="content-container">
            <h1>Store Name</h1>
            <p>Some text about the business</p>

            <h2>Featured products</h2>
            {displayFeaturedProducts()}
        </div>
    )
}