import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({title, image, price, rating, id}) {
      const[{basket}, dispatch]=useStateValue()

      const addToBasket=()=>{
            //dispatch the item to the layer
            dispatch({
                  type:'ADD_TO_BASKET',
                  item:{
                        id:id,
                        title:title,
                        rating:rating,
                        image:image,
                        price:price
                  },
            })
      }

      return (
            <div className='product'>
                  <div className="product_info">
                        <p className="product_title">{title}</p>
                        <p className="product_price">$ <span>{price }</span> </p>
                        <div className="product_rating">
                              {Array(rating).fill().map((i)=>(
                              <StarIcon />
                              ))}
                        </div>
                  </div>
                  <img src={image} alt='' />
                  {/* <img src='https://media.gettyimages.com/photos/sony-corp-4k-bravia-liquidcrystaldisplay-televisions-are-displayed-picture-id484879103?k=6&m=484879103&s=612x612&w=0&h=Nj_mWSOYZyuCtOYPHeKSTvkby9WLXCz3YQHRejWx7GM=' alt='' /> */}
                   <button onClick={addToBasket}>Add to Basket</button>
            </div>
      )
}

export default Product
