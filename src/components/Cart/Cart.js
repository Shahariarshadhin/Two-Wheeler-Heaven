// import React, { useState } from 'react';
// import SingleProduct from '../SingleProduct/SingleProduct';
import './Cart.css'

const Cart = ({ cart, chooseForME, chooseAgain }) => {


    return (
        <div className='cart'>

            <h4>Product You Choose : {cart.length}</h4>


            {cart.map((course) => (
                <div className='cart-img' key={course.id}>
                    <img id='image' src={course.img} alt="" />
                    <p>{course.name}</p>

                </div>
            ))}


            <button className='cart-btn' onClick={() => chooseForME(cart)}> Choose 1 For Me</button>
            <button className='cart-btn' onClick={() => chooseAgain(cart)}> Choose Agian</button>


        </div>
    );
};

export default Cart;