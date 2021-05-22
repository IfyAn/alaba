import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";
import Goods from './Goods'

function Checkout() {
      const [{ basket, user}, dispatch] = useStateValue();
      return (
            <div className='checkout'>
              <div className="checkout_left">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7_27dpB0TOGnEtEyZhQz2yXyc7ZUiQUzQw&usqp=CAU' className='checkout_ad' alt='' />
                     <div>
                     <h3>Hello, {user?.email}</h3>
                           <h2 className="checkout_title">Your shopping basket</h2>
                           {basket.map(item => (
                              <Goods
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                              />
                        ))}
                     </div>
              </div>
              <div className="checkout_right">
                  <Subtotal />
              </div>
            </div>   
      )
}

export default Checkout
