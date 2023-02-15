// import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";

// imgs
import imgOne from '../../public/assets/imgs/circle-pool.jpg'
import fav from '../../public/assets/imgs/heart.svg'
import arrowLeft from '../../public/assets/imgs/arrow-left.svg'
import arrowRight from '../../public/assets/imgs/arrow-right.svg'


const DiscountProducts = () => {
    return ( 
        <>
            <div className="container mb-40 mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <div className="title font-bold text-3xl">Товары со скидкой</div>  
                    <div className="flex">
                        <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mr-4 cursor-pointer hover:bg-colorBlue">
                            <Image src={arrowLeft} alt="" />
                        </span>
                        <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-colorBlue">
                            <Image src={arrowRight} alt="" />
                        </span>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="box bg-white shadow-lg rounded-xl basis-1/4">
                        <span>
                            <Image src={imgOne} alt=""/>
                        </span>
                        <div className="p-4 whitespace-nowrap">
                            <div className="title font-bold text-lg mb-2 w-full">Каркасный прямоугольный бассейн</div>
                            <div className="size">220х150х60см, 1662л</div>
                            <div className="prize">
                                <div className="oldprize">1 250 000 сум</div>
                                <div className="newprize">1 200 000 сум</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button type="submit" className="bg-blue-900 text-white rounded-xl py-3 px-11 w-44 text-lg">В корзину</button>
                                <div className="fav bg-colorBlue flex items-center justify-center w-14 h-14 rounded-xl ml-3 cursor-pointer">
                                    <Image src={fav} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default DiscountProducts;