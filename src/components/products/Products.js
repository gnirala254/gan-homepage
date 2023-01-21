import React from "react";
import Product from "../product/Product";
import './Products.css'

function Products() {



    const productsList = [
        {
            name: 'Choco Lava',
            price: 35,
            imgUrl: 'https://www.bakels.in/wp-content/uploads/sites/15/2019/10/unnamed-560x370.jpg',
            _id: 1
        },
        {
            name: 'Sweet Corn',
            price: 45,
            imgUrl: 'https://static.toiimg.com/thumb/58749870.cms?width=1200&height=900',
            _id: 2
        },
        {
            name: 'Vanila Cake',
            price: 305,
            imgUrl: 'https://www.basilflorist.com/image/cache/catalog/Cakes(2020)/Chocolate-Vanilla-Cake08-700x700.jpg',
            _id: 3
        },
        {
            name: 'Veg Roll',
            price: 120,
            imgUrl: 'https://static.toiimg.com/thumb/53223294.cms?imgsize=93390&width=800&height=800',
            _id: 4
        }
    ]

    return (
        <div>
            <div className="headingDiv">
                <h2>New Products</h2>
                <div className="img"></div>
            </div>
            <div className="productsContainer">
                {
                    productsList.map((product, index) => <Product productInfo={product} key={index} />)
                }
            </div>
        </div>
    )
}

export default Products;