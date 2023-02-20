import Image from "next/image";
import React from "react";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// imgs
import imgOne from '../../public/assets/imgs/circle-pool.jpg'
import fav from '../../public/assets/imgs/heart.svg'
import arrowRight from '../../public/assets/imgs/arrow-right.svg'
import arrowLeft from '../../public/assets/imgs/arrow-left.svg'


const PopularProducts = () => {

    return ( 
        <>
            <div className="container mb-40 mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <div className="title font-bold text-3xl">Популярные товары</div>  
                    <div className="flex">
                        <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mr-4 cursor-pointer hover:bg-colorBlue">
                            <Image src={arrowLeft} alt="" />
                        </span>
                        <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-colorBlue">
                            <Image src={arrowRight} alt="" />
                        </span>
                    </div>
                </div>
                {/* <div className="flex flex-row items-center space-x-5">
                    <div className="box bg-white shadow-lg rounded-xl basis-1/4">
                        <div className="flex items-center justify-center">
                            <Image src={imgOne} alt=""/>
                        </div>
                        <div className="p-4">
                            <div className="title font-bold text-lg mb-2">Каркасный прямоугольный бассейн</div>
                            <div className="size mb-2">220х150х60см, 1662л</div>
                            <div className="prize mb-3">
                                <div className="oldprize text-sm text-gray-400 line-through font-normal">1 250 000 сум</div>
                                <div className=" font-medium">1 200 000 сум</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button type="submit" className="bg-blue-900 text-white rounded-xl h-14 px-20 text-lg">В корзину</button>
                                <div className="fav bg-colorBlue flex items-center justify-center w-14 h-14 rounded-xl ml-3 cursor-pointer">
                                    <Image src={fav} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                

            </div>
        </>
     );
}
 
export default PopularProducts;