"use client"

import PopularProductsCard from "./popularProductsCard";


const items = [
    "Cameras",
    "Laptops",
    "Tablets",
    "Mouse",
]

const PopularProducts = () => {


    return (
        <>
            <div className='flex justify-between container mx-auto mt-10 '>
                <div>
                    <h1 className="text-2xl">Popular products</h1>
                </div>
                <div className="flex">
                    {
                        items.map((data) => (
                            <div key={data} className='border border-main border-2 ms-3 rounded-3xl'>

                                <button className='px-7 py-1 text-main'> {data}</button>

                            </div>
                        ))
                    }
                </div>
            </div>

            <PopularProductsCard />

        </>
    );
};

export default PopularProducts;
