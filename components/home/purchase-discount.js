import React from "react";
import Image from "next/image";

// imgs
import intexCircle from '../../public/assets/imgs/intex-circle.svg'
import uzb from '../../public/assets/imgs/uzb.svg'

const PurchseDiscount = () => {
    return ( 
        <>
            <div className="container bg-neutral-50 mx-auto mb-40 flex items-center rounded-2xl">
                <div className="grid-rows-6 w-full p-10">
                    <div className="text-3xl mb-4 font-bold">Купить оптом</div>
                    <p className="text text-textColor w-9/12 mb-8">Если вы хотите купить товары по оптовой цене, вы должны заказать не менее 20 товаров.</p>
                    <form className="bg-white w-9/12 p-8 rounded-xl">
                        <label htmlFor="name" className="block mb-3">Имя</label>
                        <input type="text" name="name" id="name" className="mb-6 ring-1 ring-zinc-300 p-4 rounded-lg w-full" placeholder="Введите ваше имя" />

                        <label htmlFor="number" className="block mb-3">Номер телефона</label>
                        <div className="flex items-center mb-6 ring-1 ring-zinc-300 p-4 rounded-lg w-full">
                            <Image src={uzb} alt="" className="mr-1"/>
                            <span className="mr-5">+998</span>
                            <input type="number" name="number" id="number" className="w-full" placeholder="(90) 123 45 67" />
                        </div>
                        <button type="submit" className="bg-blue-900 text-white rounded-xl py-4 px-8 w-full">Отправить</button>
                    </form>
                </div>
                <div className="grid-rows-6 w-full">
                    <Image src={intexCircle} className='ml-auto'/>
                </div>
            </div>
            
        </>
     );
}
export default PurchseDiscount;