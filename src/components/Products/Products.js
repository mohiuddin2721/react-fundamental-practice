import React, { useEffect, useState } from 'react';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='container '>
            <h1>Products: {products.length}</h1>
            <div className="row">
            {
                products.map(product => <SingleProduct 
                    img={product.image}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    ></SingleProduct>)
            }
            </div> 
        </div>
    );
};

function SingleProduct(props) {
    // console.log(props);
    return (
        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        className="col-md-4">
            <div className='card p-3 m-2 border'>
                <img className="w-25 m-auto" src={props.img} alt="" />
                <h3>{props.title.slice(0, 9)}</h3>
                <h2>Price: {props.price}$</h2>
                <p>{props.description.slice(0, 70)}</p>
            </div>
        </div>
    )
}

export default Products;