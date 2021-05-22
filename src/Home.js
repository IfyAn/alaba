import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
      return (
            <div className='home'>
                  <div className="home_container">
                  {/* <img
                        className="home_image"
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                        alt=""
                        /> */}
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2sLnAkvQjKksscsdS6piuyfdjkoSmGZyVw&usqp=CAU' alt='' className='home_image' />
                  <div className="home_row">
                        <Product  
                        id='1290'
                        title='Browse 612 sony bravia'
                        image='https://media.gettyimages.com/photos/model-displays-sonys-new-television-bravia-series-at-sonys-on-august-picture-id82578567?k=6&m=82578567&s=612x612&w=0&h=JkygAHJZp0_5Of-epH6Zk0beocSEsiWqOmD0iXPjjjo='
                        price={127.8} rating={3}
                           />
                        <Product
                               id='9024'
                              image='https://media.gettyimages.com/photos/sony-corp-4k-bravia-liquidcrystaldisplay-televisions-are-displayed-picture-id484879103?k=6&m=484879103&s=612x612&w=0&h=Nj_mWSOYZyuCtOYPHeKSTvkby9WLXCz3YQHRejWx7GM='
                              title='Sungsoo Kwak controls the LG ST-600 smart TV upgrader set-top box with a smart phone at the 2011 International Consumer Electronics Show at the Las
                                 Vegas Hilton January 6, 2011'
                              price={247} rating={5}
                         />
                  </div>
                  <div className="home_row">
                  <Product
                         id='4000'
                        image='https://media.gettyimages.com/photos/sungsoo-kwak-controls-the-lg-st600-smart-tv-upgrader-settop-box-with-picture-id107910944?k=6&m=107910944&s=612x612&w=0&h=UXnjou-CbLkgi3cnxM2813CksQB--2Ned_R1dgAMAeY='
                        title='Sungsoo Kwak controls the LG ST-600 smart TV upgrader set-top box with a smart phone at the 2011'
                        price={361.34} rating={5}
                   />
                  <Product 
                        id='2864'
                        image='https://media.gettyimages.com/photos/koh-president-and-ceo-of-samsung-electronics-presents-the-samsung-picture-id1160265970?k=6&m=1160265970&s=612x612&w=0&h=JW3hnDREwVPnAXfhXsCOwKP2eOV9Jc0ZX2KsMyLTbPc='
                        title='DJ Koh, president and CEO of Samsung Electronics, presents the Samsung Galaxy Note 10 smartphone'
                        price={178} rating={4}
                  />
                  <Product 
                        id='5555'
                        image='https://media.gettyimages.com/photos/photo-taken-on-aug-9-shows-smart-speaker-galaxy-home-from-samsung-co-picture-id1014299524?s=2048x2048'
                        title='shows smart speaker "Galaxy Home" from Samsung Electronics Co., unveiled at a launch event in New York. (Kyodo)'
                        price={478} rating={3}
                  />
                  </div>
                  <div className="home_row">
                  <Product 
                        id='4444'
                        image='https://media.gettyimages.com/photos/the-macbook-pro-laptop-is-displayed-at-an-apple-store-on-june-27-2019-picture-id1158697466?s=2048x2048'
                        title='CORTE MADERA, CALIFORNIA - JUNE 27: The MacBook Pro laptop is displayed at an Apple Store on June 27, 2019 in Corte Madera, California. Apple announced a recall of an estimated 432,000 15-inch MacBook Pro laptops due to concerns of overheating batteries that could catch fire. The recall is for 15-inch MacBook Pro laptops sold between September 2015 and February 2017'
                        price={520} rating={5}
                  />
                  </div>
                  </div>
            </div>
      )
}

export default Home
