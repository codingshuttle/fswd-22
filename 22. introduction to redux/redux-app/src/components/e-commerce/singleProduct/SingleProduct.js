import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";
import "./SingleProduct.css";
import MyButton from "../MyButton";


function SingleProduct({ product }) {

    const dispatach = useDispatch();

    const cart = useSelector(state => state.cartReducer.cart);
    const curItem = cart.find(item => item.id == product.id);
    const curQuantity = curItem ? curItem.quantity : 0;

    return (
        <div className="SingleProduct">
            <img
                className="productImg"
                src={product.images[0]}
                alt={product.title}
            />
            <div className="productInfo">
                <h2 className="productTitle">{product.title}</h2>
                <p className="productPrice">{product.price}</p>
                <p>Category: {product.category.name}</p>
            </div>
            <div className="cartInfo">
                <button className="button" onClick={() => dispatach(removeFromCart(product.id))}>-</button>
                <h4>{curQuantity}</h4>
                <button className="button" onClick={() => dispatach(addToCart(product.id))}>+</button>
                <MyButton>Mytext</MyButton>
            </div>
        </div>
    );
}

export default SingleProduct;
