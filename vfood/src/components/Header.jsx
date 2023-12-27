import React from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';


const imgs = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const Header = ({type, img, title}) => {
    return(
        <div className={'w-full h-[100vh]'}>
            <div className={'relative w-full h-full'}>
                <img src={img ?? imgs[Math.floor(Math.random() * imgs.length)]} alt='Header Image'
                     className={'w-full h-full object-cover'}/>
            </div>

            <div
                className={'absolute w-full h-full bg-gradient-to-t from-green-700 to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt20 px-4'}>
                <h1 className={'text-white text-4xl md:text-5xl font-bold text-center'}>{title}</h1>
                {
                    type && (
                        <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full '>Xin chao
                            <br className='hidden md:block'/> Discover a treasure trove of delectable recipes from around the globe.
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Header;