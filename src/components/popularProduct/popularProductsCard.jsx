"use client"
import React, { useState } from 'react';
import eye from '../../../public/photo/eye.svg'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const productCard = [
  {
    img: "/photo/camera 1.png",
    heading: "Canon Camera",
    price: "500$",
    review: "/photo/Frame 26.png",
    id: 1
  },
  {
    img: "/photo/Frame 29 (3).png",
    heading: "Wireless headphones",
    price: "100$",
    review: "/photo/Frame 26.png",
    id: 2
  },
  {
    img: "/photo/Frame 29 (11).png",
    heading: "Play game",
    price: "50$",
    review: "/photo/Frame 26.png",
    id: 3
  },
  {
    img: "/photo/Frame 29 (12).png",
    heading: "Tablet as a laptop",
    price: "850$",
    review: "/photo/Frame 26.png",
    id: 4
  }, {
    img: "/photo/camera 1.png",
    heading: "Canon Camera",
    price: "500$",
    review: "/photo/Frame 26.png",
    id: 1
  },
  {
    img: "/photo/Frame 29 (3).png",
    heading: "Wireless headphones",
    price: "100$",
    review: "/photo/Frame 26.png",
    id: 2
  },
  {
    img: "/photo/Frame 29 (11).png",
    heading: "Play game",
    price: "50$",
    review: "/photo/Frame 26.png",
    id: 3
  },
  {
    img: "/photo/Frame 29 (3).png",
    heading: "Wireless headphones",
    price: "100$",
    review: "/photo/Frame 26.png",
    id: 2
  },
]

function PopularProductsCard() {
  const [isHovered, setIsHovered] = useState(Array(productCard.length).fill(false));

  const handleMouseEnter = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = true;
    setIsHovered(updatedHoverState);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverState = [...isHovered];
    updatedHoverState[index] = false;
    setIsHovered(updatedHoverState);
  };

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 mb-6 container mx-auto gap-2 md:gap-6'>
        {
          productCard.map((data, index) => (
            <div key={data.id}>
              <div className="relative  mx-auto w-[80%] md:w-[100%] h-[95%] md:h-[100%]  border border-2 border-gray-400 rounded-lg  overflow-hidden transition duration-300 transform hover:scale-105"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}>
                {/* Card Content */}
                <div className="p-6">
                  <img src={data.img} alt="" />
                  <h2 className="md:text-lg text-sm text-main   font-semibold mb-2">{data.heading}</h2>
                  <p className="text-gray-600">{data.price}</p>
                  <img src={data.review} alt="" />
                  <div>
                    <div className="absolute ms-3 me-5 md:hidden bottom-0 left-0 right-0 p-4 bg-white flex justify-center space-x-4">
                      <button  className='btn ms-2 bg-ylo btn-sm px-6 ps-[0.5rem]'>Buy Now</button>
                      <div className='bg-ylo w-8 h-7 rounded-lg mt-[0.5px] '>
                        <Link href="#">
                          <FontAwesomeIcon className='text-main p-2 pb-2' icon={faEye} />
                        </Link>
                      </div>


                    </div>
                  </div>
                </div>

                {/* Buttons (hidden by default, shown on hover) */}
                {isHovered[index] && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white flex justify-center space-x-4">
                    <button className='btn bg-ylo  btn-md  px-8'>Buy Now</button>
                    <div className='bg-ylo hover:bg-gray-300  rounded-lg mt-[0.5px] '>
                        <Link href="#">
                          <FontAwesomeIcon className='text-main px-4 pt-4 rounded-xl ' icon={faEye} />
                        </Link>
                      </div>
                  </div>
                )}
              </div>
            </div>
          ))
        }
      </div>
      <div className=' flex justify-center mb-10 '>
        <button className='  btn btn-md px-32 bg-ylo border border-main border-2 rounded-2xl text-white'>See more</button>
      </div>
    </>
  )
}

export default PopularProductsCard;
// /* Wireless headphones */

// width: 186px;
// height: 26px;

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 500;
// font-size: 17.0939px;
// line-height: 26px;
// /* identical to box height */

// /* a */
// color: #003F62;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
