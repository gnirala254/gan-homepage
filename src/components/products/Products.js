import React from "react";
import Product from "../product/Product";
import './Products.css'

function Products() {



    const productsList = [
        {
            name : 'Choco Lava',
            price : 35,
            imgUrl : 'https://cdn.shopify.com/s/files/1/0319/1449/2041/products/BelgiumChocolateTruffleCakeHalfKg_large.jpg?v=1668000495',
            _id : 1
        },
        {
            name : 'Sweet Corn',
            price : 45,
            imgUrl : 'https://cdn.shopify.com/s/files/1/0319/1449/2041/products/BelgiumChocolateTruffleCakeHalfKg_large.jpg?v=1668000495',
            _id : 2
        },
        {
            name : 'Vanila Cake',
            price : 305,
            imgUrl : 'https://cdn.shopify.com/s/files/1/0319/1449/2041/products/BelgiumChocolateTruffleCakeHalfKg_large.jpg?v=1668000495',
            _id : 3
        },
        {
            name : 'Veg Roll',
            price : 120,
            imgUrl : 'https://cdn.shopify.com/s/files/1/0319/1449/2041/products/BelgiumChocolateTruffleCakeHalfKg_large.jpg?v=1668000495',
            _id : 4
        }
    ]

    return (
        <div className="productsContainer">
            {
                productsList.map((product, index) => <Product productInfo={product} key={index} />)
            }
        </div>
    )
}

export default Products;