import React from "react";
import Image from "next/image";

// imgs
import person from '../../public/assets/imgs/person.svg'
import uzb from '../../public/assets/imgs/uzb.svg'

const Consultation = () => {
    return ( 
        <>
            <div className="container bg-neutral-50 mx-auto mb-40 rounded-2xl">
                <div className="flex flex-row items-center justify-between">               
                    <div className="basis-1/2 mt-auto">
                        <div className="flex justify-center">
                            <Image src={person}/>
                        </div>
                    </div>
                    <div className="basis-1/2 p-10">
                        <div className="w-9/12 ml-auto mr-12">
                            <div className="text-3xl mb-4 font-bold">Получить консултацию</div>
                            <p className="text text-textColor mb-8">Чтобы получить консультацию, отправьте нам свой номер телефона и имя, и мы свяжемся с вами в ближайшее время.</p>
                            <form className="bg-white p-8 rounded-xl">
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
                    </div>
                </div>
            </div>
            
        </>
     );
}
export default Consultation;