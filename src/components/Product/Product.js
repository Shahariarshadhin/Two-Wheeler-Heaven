import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleAddToClick }) => {

    // const { product, handleAddToClick } = props;

    const { name, model, price, img } = product;


    return (
        <div className='product'>
            <div className='info'>
                <img src={img} alt="" />
                <p><b>Brand :</b> {name}</p>
                <p><b>Model :</b> {model}</p>
                <p><b>Price:</b> {price}</p>
            </div>
            <button onClick={() => handleAddToClick(product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;