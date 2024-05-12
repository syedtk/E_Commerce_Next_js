"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import carou1 from '../../../public/photo/carousel/ca1.jpg'
import carou2 from '../../../public/photo/carousel/ca2.jpg'
import carou3 from '../../../public/photo/carousel/ca3.jpg'

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

function HeroCaurosel() {
    return (

        <div className='container mx-auto md:h-[70vh]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='grid grid-row-2  '>
                    <Image className='w-[50%]' src={carou1} width={650} height={400} alt='Image no 01' />
                    <div className='w-[50%]'>
                        <h1 className='font-bold md:mb-10 text-[4vw] text-ylo'>
                            Mobile Accessories
                        </h1>
                       
                        <button className='btn mb-2 ms-4 md:ms-1 me-5 bg-ylo btn-sm md:btn-md text-white'>Show More</button> 
                        <button className='btn hover:bg-ylo btn-sm md:btn-md bg-white border-main text-main'>View More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='grid grid-row-2  '>
                    <Image className='w-[50%]' src={carou2} width={650} height={400} alt='Image no 01' />
                    <div className='w-[50%]'>
                        <h1 className='font-bold md:mb-10 text-[4vw] text-ylo'>
                            Mobile Accessories
                        </h1>
                       
                        <button className='btn mb-2 ms-4 md:ms-1 me-5 bg-ylo btn-sm md:btn-md text-white'>Show More</button> 
                        <button className='btn hover:bg-ylo btn-sm md:btn-md bg-white border-main text-main'>View More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='grid grid-row-2  '>
                    <Image className='w-[50%]' src={carou3} width={650} height={400} alt='Image no 01' />
                    <div className='w-[50%]'>
                        <h1 className='font-bold md:mb-10 text-[4vw] text-ylo'>
                            Mobile Accessories
                        </h1>
                       
                        <button className='btn mb-2 ms-4 md:ms-1 me-5 bg-ylo btn-sm md:btn-md text-white'>Show More</button> 
                        <button className='btn hover:bg-ylo btn-sm md:btn-md bg-white border-main text-main'>View More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='grid grid-row-2  '>
                    <Image className='w-[50%]' src={carou2} width={650} height={400} alt='Image no 01' />
                    <div className='w-[50%]'>
                        <h1 className='font-bold md:mb-10 text-[4vw] text-ylo'>
                            Mobile Accessories
                        </h1>
                       
                        <button className='btn mb-2 ms-4 md:ms-1 me-5 bg-ylo btn-sm md:btn-md text-white'>Show More</button> 
                        <button className='btn hover:bg-ylo btn-sm md:btn-md bg-white border-main text-main'>View More</button>
                    </div>
                </SwiperSlide>
                


            </Swiper>
        </div>
    )
}

export default HeroCaurosel
