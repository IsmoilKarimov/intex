"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// imgs
import cart from '../../public/assets/imgs/cart-backet.svg'
import del from '../../public/assets/imgs/del.svg'
import imgOne from '../../public/assets/imgs/circle-pool.jpg'
import fav from '../../public/assets/imgs/heart.svg'
import arrowRight from '../../public/assets/imgs/arrow-right.svg'
import arrowLeft from '../../public/assets/imgs/arrow-left.svg'
import circleIntexPool from '../../public/assets/imgs/circle-intex-pool.jpg'


const backetProducts = [
    {
        img: require('../../public/assets/imgs/circle-intex-pool.jpg'),
        title: 'Каркасный прямоугольный бассейн',
        poolSize:'260х160х65см, 2282л',
        poolPrice: '1 290 000 сум',
        id: 1,
    },
    {
        img: require('../../public/assets/imgs/circle-pool.jpg'),
        title: 'Каркасный прямоугольный бассейн',
        poolSize:'260х160х65см, 2282л',
        poolPrice: '1 290 000 сум',
        id: 2,
    },
]
console.log(backetProducts.length)

const Cart = () => {

    const [count, setCount] = useState(1)

    return ( 
        <>
            {backetProducts.length ? (
                <div className="container mx-auto">
                <div className="cart my-12 mb-44">
                    <div className="font-bold text-3xl text-center mb-16">Корзина</div>
                    <div className="flex flex-row">
                        <div className="basis-8/12">
                            {backetProducts.map(product => {
                                return(
                                    <div key={product.id}>
                                        <div className="cart__box flex items-center justify-between mr-6">
                                            <div className="w-2/12 h-24 flex items-center">
                                                <Image src={product.img} alt=""/>
                                            </div>
                                            <div className="-ml-24">
                                                <div className="text-lg font-medium mb-2">{product.title}</div>
                                                <span className="text-sm text-textColor mb-2 block">{product.poolSize}</span>
                                                <span className="font-medium text-lg">{product.poolPrice}</span>
                                            </div>
                                            <div className="cart__count flex items-center border-2 border-zinc-300 rounded-md w-32 h-11">
                                                <button onClick={()=> {if(count>0) setCount(count-1)}} className="count__less w-2/6 text-2xl flex justify-center items-center border-r-2 border-zinc-300 h-full">-</button>
                                                <div className="count__val w-2/6 text-2xl flex justify-center">{count}</div>
                                                <button onClick={()=> {setCount(count+1)}} className="count__more w-2/6 text-2xl flex justify-center items-center border-l-2 border-zinc-300 h-full">+</button>
                                            </div>
                                            <button className="mr-4">
                                                <Image src={del} alt ="" />
                                            </button>
                                        </div>
                                        <div className="withLine h-px mt-4 mb-8 bg-zinc-300"></div>
                                    </div>
                                )
                            })}
                            
                        </div>
                        <div className="basis-4/12 h-2/5 p-8 rounded-lg border border-zinc-300">
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-normal text-lg">В корзине (2)</span>
                                <span className="font-medium text-lg">1 290 000 сум</span>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="font-normal text-lg">Скидка:</span>
                                <span className="font-medium text-lg">1 290 000 сум</span>
                            </div>
                            <div className="flex items-center justify-center mb-3">
                                <span className="font-medium text-lg">Есть промо код ?</span>
                            </div>
                            <div className="flex justify-between items-center border border-zinc-300-900 p-4">
                                <span>45544WSDS54</span>
                                <Link href="#" className="text-colorBlue">Применять</Link>
                            </div>
                            <div className="h-px w-full my-7 bg-zinc-300"></div>
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-2xl">Всего к оплате :</span>
                                <span className="font-medium text-2xl">1 290 000 сум</span>
                            </div>
                            <div className="h-px w-full mt-7 mb-5 bg-zinc-300"></div>
                            <button type="submit" className="bg-blue-900 text-white rounded-xl py-4 px-8 w-full">Перейти к оформлению заказа</button>
                        </div>
                    </div>
                </div>

                <div className="new-products mb-24">
                    <div className="flex items-center justify-between mb-10">
                        <div className="title font-bold text-3xl">Похожие товары</div>  
                        <div className="flex">
                            <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mr-4 cursor-pointer hover:bg-colorBlue">
                                <Image src={arrowLeft} alt="" />
                            </span>
                            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 cursor-pointer hover:bg-colorBlue">
                                <Image src={arrowRight} alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-5">
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
                    </div>
                </div>
            </div>
            ):(
                <div className="container mx-auto ">
                <div className="cart my-24 text-center">
                    <div className="mb-8 flex justify-center">
                        <Image src={cart} alt="" />
                    </div>
                    <div className="title mb-6 font-bold text-2xl text-black">В корзине пока ничего нет</div>
                    <div className=" mb-16 w-1/2 mx-auto">
                        Вы можете начать свой выбор с нашего каталога продукции или воспользоваться поиском, если вы ищете что-то конкретное.
                    </div>
                    <button type="submit" className="bg-blue-900 text-white rounded-xl py-4 px-16">Выберите продукт</button>
                </div>
            </div>
            )} 
        </>
     );
}
 
export default Cart;