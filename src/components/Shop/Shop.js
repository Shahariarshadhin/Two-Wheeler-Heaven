import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToClick = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)

    }

    const chooseForME = (cart) => {


        const item = cart[Math.floor(Math.random() * cart.length)];
        const newCart = [item];
        setCart(newCart);


    }
    const chooseAgain = (cart) => {
        setCart([]);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product

                        key={product.id}
                        product={product}
                        handleAddToClick={handleAddToClick}


                    ></Product>)
                }

            </div>


            <div className="cart-container">
                <Cart cart={cart} chooseForME={chooseForME} chooseAgain={chooseAgain}></Cart>
            </div>
        </div>
    );
};

export default Shop;