import Image from "next/image";

// imgs
import uzb from '../../public/assets/imgs/uzb.svg'
import money from '../../public/assets/imgs/money.svg'
import card from '../../public/assets/imgs/card.svg'
import click from '../../public/assets/imgs/click.svg'


const Payment = () => {
    return ( 
        <>
            <div className="payment w-11/12 mx-auto">
                <div className="title font-bold text-3xl text-center mb-12">Oформлению заказа</div>
                <div className="flex flex-row space-x-6">
                    <div className="basis-8/12">
                        <div className="font-medium text-lg w-full mb-5">1. Личные данные</div>
                        <form className="mb-16">
                            <div className="flex items-center space-x-7 mb-7 ">    
                                <div className="w-1/2">
                                    <label htmlFor="name" className="block mb-3">Имя</label>
                                    <input type="text" name="name" id="name" className="mb-6 ring-1 ring-zinc-300 p-4 rounded-lg w-full" placeholder="Введите ваше имя" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="number" className="block mb-3">Номер телефона</label>
                                    <div className="flex items-center mb-6 ring-1 ring-zinc-300 p-4 rounded-lg w-full">
                                        <Image src={uzb} alt="" className="mr-1"/>
                                        <span className="mr-5">+998</span>
                                        <input type="number" name="number" id="number" className="w-full" placeholder="(90) 123 45 67" />
                                    </div>
                                </div>
                            </div>
                            <div className="font-medium text-lg w-full mb-5">2. Выберите способ оплаты</div>
                            <div className="w-full flex items-center space-x-5 mb-7">
                                <div className="payment basis-1/3 flex items-center ring-1 ring-zinc-300 p-4 rounded-lg w-full cursor-pointer">
                                    <input type="radio" name="payment" id="cash" className="cursor-pointer hidden"/>
                                    <Image src={money} alt="" />
                                    <label htmlFor="cash" className="ml-3 w-full cursor-pointer">Наличными</label>
                                </div>
                                <div className="payment basis-1/3 flex items-center ring-1 ring-zinc-300 p-4 rounded-lg w-full cursor-pointer">
                                    <input type="radio" name="payment" id="uzcard" className="cursor-pointer hidden "/>
                                    <Image src={card} alt="" />
                                    <label htmlFor="uzcard" className="ml-3 w-full cursor-pointer">Uzcard/Humo</label>
                                </div>
                                <div className="payment basis-1/3 flex items-center ring-1 ring-zinc-300 p-4 rounded-lg w-full cursor-pointer">
                                    <input type="radio" name="payment" id="payme" className="cursor-pointer hidden"/>
                                    <Image src={click} alt="" />
                                    <label htmlFor="payme" className="ml-3 w-full cursor-pointer">Payme/Click</label>
                                </div>
                            </div>
                            <div className="font-medium text-lg w-full mb-5">3. Ваши детали доставки</div>
                            <div className="flex items-center space-x-5 mb-7 ">    
                                <div className="w-1/2">
                                    <label htmlFor="number" className="block mb-3">Регион</label>
                                    <div className="flex w-full items-center mb-6 ring-1 ring-zinc-300 p-4 rounded-lg">
                                        <select name="region" className="w-full rounded-xl">
                                            <option value="null" >Выбирите</option>
                                            <option value="Тошкент" >Тошкент</option>
                                            <option value="Андижан" >Андижан</option>
                                            <option value="Самарканд" >Самарканд</option>
                                            <option value="Бухоро" >Бухоро</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="number" className="block mb-3">Город</label>
                                    <div className="flex items-center mb-6 ring-1 ring-zinc-300 p-4 rounded-lg">
                                        <select name="city" className="w-full">
                                            <option value="null">Выбирите</option>
                                            <option value="Тошкент">Тошкент</option>
                                            <option value="Андижан">Андижан</option>
                                            <option value="Самарканд">Самарканд</option>
                                            <option value="Бухоро">Бухоро</option>
                                        </select>
                                    </div>
                                </div>                               
                            </div>
                            <div className="w-full flex items-center space-x-5 mb-7">
                                <div className="w-3/4">
                                    <label htmlFor="address" className="block mb-3">Адрес</label>
                                    <input type="text" name="address" id="address" className="mb-6 ring-1 ring-zinc-300 p-4 rounded-lg w-full" placeholder="Введите ваше адрес" />
                                </div>    
                                <div className="w-1/4">
                                    <label htmlFor="floor" className="block mb-3">Этаж</label>
                                    <input type="text" name="floor" id="floor" className="mb-6 ring-1 ring-zinc-300 p-4 rounded-lg w-full" placeholder="Если есть" />
                                </div>    
                            </div> 
                            <div className="w-full">
                                <label htmlFor="address" className="block mb-3">Комментарий</label>
                                <input type="text" name="address" id="address" className="mb-6 ring-1 ring-zinc-300 p-4 rounded-lg w-full" placeholder="Комментарий" />
                            </div>
                            <button type="submit" className="bg-blue-900 text-white rounded-xl py-4 px-8 w-full">Оформить заказ</button>
                        </form>
                    </div>
                    <div className="basis-4/12 h-2/5 p-8 rounded-lg border border-zinc-300">
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-normal text-lg">В корзине (2)</span>
                            <span className="font-medium  text-lg">1 290 000 сум</span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="font-normal text-lg">Скидка:</span>
                            <span className="font-medium  text-lg">1 290 000 сум</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-normal text-lg">Доставка:</span>
                            <span className="font-medium  text-lg">20 000 сум</span>
                        </div>
                        <div className="h-px w-full my-7 bg-zinc-300"></div>
                        <div className="flex items-center justify-between">
                            <span className="font-normal text-lg">Всего к оплате :</span>
                            <span className="font-medium  text-lg">1 310 000 сум</span>
                        </div>
                        <div className="h-px w-full mt-7 mb-5 bg-zinc-300"></div>
                        <button type="submit" className="bg-blue-900 text-white rounded-xl py-4 px-8 w-full">Изменить заказ</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Payment;