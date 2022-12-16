import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    const status = useSelector(state => state.productReducer.status);
    const error = useSelector(state => state.productReducer.error)

    useEffect(() => {
        dispatch(fetchData())
    }, []);

    if(status === 'loading') {
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
        return <Spin style={{position: 'absolute', top: '40%', left: '50%'}} indicator={antIcon} />
    }
    if(status === 'failed') {
        return <><h3>Uh oh! Something went wrong</h3>
        <p>{error}</p></>
    }

    return (
        <div className="ProductList">
            {products.map((item) => (
                <SingleProduct key={item.id} product={item} />
            ))}
        </div>
    );
}

export default ProductList;
