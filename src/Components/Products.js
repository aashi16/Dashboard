import {  useState, useEffect } from 'react';
import axios from 'axios'
import Rating from '@mui/material/Rating';
import '../style/Product.css'
const Products = () => {
const [productList, setProductList] = useState([]);
 useEffect( () => {
    const getProductList = async () => {
      const response = await axios.get( 
        "https://fakestoreapi.com/products"
    ); 
    setProductList(response.data); 
    console.log(productList)
    }
    getProductList();
  })
  return(
    <div className='Product'>
      <div className='Product-title'>Products</div>
      <div className='Product-cards'>
      {/* {productList.map((item)=>{
        const { id, image, category,description,rating,price,title} = item;
        return(
          <div key={id} className='Product-card'>
            <img src={image}/>
            <div className='Product-card-title'>{title}</div>
            <div className='Product-card-price'>{price}</div>
            <div className='Product-card-subtitle'>{category}</div>
            <div className='Product-card-subtitle'>{description}</div>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
        )
      })} */}
      </div>
    </div>
  )
}
export default Products;