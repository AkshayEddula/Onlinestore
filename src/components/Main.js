import React from 'react'
import { useState,useEffect } from 'react'
import i1 from '../images/f1/i1.jpg'
import i2 from '../images/f1/i5.jpg'
import i3 from '../images/f1/i6.jpg'
import i4 from '../images/f1/i7.jpg'
import i5 from '../images/f3/i3.jpg'
import i6 from '../images/f3/i11.jpg'
import i7 from '../images/f3/i12.jpg'
import i8 from '../images/f3/i13.jpg'
import i9 from '../images/f2/i2.jpg'
import i10 from '../images/f2/i8.jpg'
import i11 from '../images/f2/19.jpg'
import i12 from '../images/f2/i10.jpg'
import i13 from '../images/f4/i4.jpg'
import i14 from '../images/f4/i14.jpg'
import i15 from '../images/f4/i15.jpg'
import i16 from '../images/f4/i16.jpg'
import '../css/Main.css'

export const Main = () => {
    
    const [currentstate, setCurrentstate] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const imagePaths = {
        1: i1,
        2: i2,
        3: i3,
        4: i4,
    }

    const imagePaths2 = {
        1: i5,
        2: i6,
        3: i7,
        4: i8,
    }

    const imagePaths3 = {
        1: i9,
        2: i10,
        3: i11,
        4: i12,
    }

    const imagePaths4 = {
        1: i13,
        2: i14,
        3: i15,
        4: i16,
    }

    useEffect(() => {
        const interval = setInterval(() => {
                setIsTransitioning(true);
                setTimeout(() => {
                setCurrentstate((prevImage) => (prevImage === Object.keys(imagePaths).length ? 1 : prevImage + 1));
                setIsTransitioning(false);
            }, 800); // Change the transition duration (in milliseconds) as needed
        }, 2000);   
        
        return () => clearInterval(interval);
    }, [imagePaths]);

  return (
      <div className='flex mt-10'>
          <div className={`slider-wrapper ${isTransitioning ? 'transition' : ''}`}>
                    <div>
                  <img id='imgs' className=' cursor-pointer'   src={imagePaths[currentstate]} />
                    </div>
          </div>
          <div className={`slider-wrapper2 ${isTransitioning ? 'transition' : ''}`}>
                    <div>
                        <img id='imgs' className=' cursor-pointer'  src={imagePaths2[currentstate]} />
                    </div>
          </div>
          <div className={`slider-wrapper3 ${isTransitioning ? 'transition' : ''}`}>
                    <div>
                        <img id='imgs' className=' cursor-pointer'  src={imagePaths3[currentstate]} />
                    </div>
          </div>
          <div className={`slider-wrapper4 ${isTransitioning ? 'transition' : ''}`}>
                    <div>
                        <img id='imgs' className=' cursor-pointer'  src={imagePaths4[currentstate]} />
                    </div>
          </div>
          <div className='btn1'>
              <button className="bg-[#ff8f94] rounded p-5 text-lg text-white">SHOP NOW</button>
          </div>
    </div>
  )
}
