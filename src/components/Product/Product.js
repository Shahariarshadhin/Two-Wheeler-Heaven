import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, model, price, img } = props.product;


    return (
        <div className='product'>
            <div className='info'>
                <img src={img} alt="" />
                <p><b>Brand :</b> {name}</p>
                <p><b>Model :</b> {model}</p>
                <p><b>Price:</b> {price}</p>
            </div>
            <button onClick={() => props.handleAddToClick(props.product.name)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;