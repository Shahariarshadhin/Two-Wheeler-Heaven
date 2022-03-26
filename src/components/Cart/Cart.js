// import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Cart.css'

const Cart = ({ cart }) => {

    // const [choose, setChoose] = useState([]);


    const chooseForME = ({ cart }) => {
        const newChoose = [cart];

        newChoose.value = '';



    }


    return (
        <div className='cart'>

            <h4>Show me {cart.length}</h4>

            <div>
                {cart.map((product) => (
                    <SingleProduct product={product} key={product.id} ></SingleProduct>
                ))}
            </div>

            <div>
                <button onClick={() => chooseForME()}> Choose 1 For Me</button>
            </div>

        </div>
    );
};

export default Cart;