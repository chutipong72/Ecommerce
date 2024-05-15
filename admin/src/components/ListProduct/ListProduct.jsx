import React, { useState, useEffect } from 'react';
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    await fetch('http://localhost:4000/products')
    .then((res) => res.json())
    .then((data) => {setAllProducts(data)});
  }

  useEffect(() => {
    fetchAllProducts()
  }, []);

  const removeProduct = async (id) => {
    await fetch(`http://localhost:4000/deleteproduct`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id}),
    })
    await fetchAllProducts()
  }

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
      {allproducts.map((product,index) => {
        return <>
        <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-producticon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{removeProduct(product.id)}} src={cross_icon} alt="" className='remove-icon' />
          </div>
          <hr />
          </>
      })}
      </div>
    </div>
  )
}

export default ListProduct