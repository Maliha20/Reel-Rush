import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/wallpaperflare.com_wallpaper (5).jpg'
import img2 from '../../../assets/pxfuel (2).jpg'
import img3 from '../../../assets/pxfuel.jpg'
const Banner = () => {
    return (
        <div className='text-center relative'>
        <Carousel>
          <div>
              <img src={img1} />
          </div>
          <div>
              <img src={img2} />
              
          </div>
          <div>
              <img src={img3} />
         </div>
      </Carousel>
  </div>
    );
};

export default Banner;