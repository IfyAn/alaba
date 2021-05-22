import React from 'react'
import './Goods.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from "./StateProvider";

function Goods({ id, image, title, price, rating, hideButton }) {
      const [{ basket }, dispatch] = useStateValue();

      const removeFromBasket = () => {
            // remove the item from the basket
            dispatch({
                type: 'REMOVE_FROM_BASKET',
                id: id,
            })
        }

      return (
            <div className='goods'>
                  <img className='goods_image' src={image} />
                  <div className='goods_info'>
                        <p className='goods_title'>{title}</p>
                        <p className="goods_price">
                              <small>$</small>
                              <strong>{price}</strong>
                        </p>
                        <div className="goods_rating">
                              {Array(rating).fill().map((_, i) => (
                                    <StarIcon />
                              ))}
                        </div>
                  </div>{!hideButton && (<button className='goods_button' onClick={removeFromBasket}>Delete from Basket</button>)} 
            </div>
      )
}

export default Goods
