import Image from "next/image";
import React from "react";
import Link from "next/link";

// imgs
import logo from '../public/assets/imgs/logo.svg'
import facebook from '../public/assets/imgs/facebook.svg'
import instagram from '../public/assets/imgs/instagram.svg'
import linkedin from '../public/assets/imgs/linkedin.svg'
import twitter from '../public/assets/imgs/twitter.svg'
import location from '../public/assets/imgs/location.svg'
import phone from '../public/assets/imgs/phone.svg'
import email from '../public/assets/imgs/email.svg'
import time from '../public/assets/imgs/time.svg'


const Footer = () => {
    return(
        <footer className="bg-neutral-50 w-full mt-auto">
            <div className="container flex justify-between mx-auto py-14 font-normal">
                <div className="grid-rows-3">
                    <div className="logo w-40 py-7">
                        <Image src={logo} alt="" />
                    </div>
                    <div className="text w-72 font-normal mb-7">
                    Бассейны от intex - доступная по цене, качественная, надежная и экологически чистая продукция, которая предназначена для приятного отдыха всей семьи
                    </div>
                    <div className="social flex items-center">
                        <div className="facebook bg-colorBlue w-9 h-9 rounded-xl flex items-center justify-center mr-8">
                            <Link href="#">
                                <Image src={facebook} alt="" />
                            </Link>
                        </div>
                        <div className="linkedin bg-colorBlue w-9 h-9 rounded-xl flex items-center justify-center mr-8">
                            <Link href="#">
                                <Image src={linkedin} alt="" />
                            </Link>
                        </div>
                        <div className="instagram bg-colorBlue w-9 h-9 rounded-xl flex items-center justify-center mr-8">
                            <Link href="#">
                                <Image src={instagram} alt="" />
                            </Link>
                        </div>
                        <div className="twitter bg-colorBlue w-9 h-9 rounded-xl flex items-center justify-center mr-8">
                            <Link href="#">
                                <Image src={twitter} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid-rows-3">
                    <div className="title font-bold text-lg mb-6">Полезные ссылки</div>
                    <ul className="font-medium">
                        <li className="mb-4"><Link href="#">О Продукт</Link></li>
                        <li className="mb-4"><Link href="#">Почему мы?</Link></li>
                        <li className="mb-4"><Link href="#">Контакты</Link></li>
                        <li className="mb-4"><Link href="#">Категории</Link></li>
                        <li className="mb-4"><Link href="#">Популярное</Link></li>
                        <li className="mb-4"><Link href="#">Новинки</Link></li>
                        <li className="mb-4"><Link href="#">На скидке</Link></li>
                    </ul>
                </div>
                <div className="grid-rows-3">
                    <div className="title font-bold text-lg mb-6">Центр помощи</div>
                    <ul className="font-medium">
                        <li className="mb-4"><Link href="#">Доставка и оплата</Link></li>
                        <li className="mb-4"><Link href="#">Часто задаваемые вопросы</Link></li>
                        <li className="mb-4"><Link href="#">Политика конфиденциальности</Link></li>
                    </ul>
                </div>
                <div className="grid-rows-3">
                    <div className="title font-bold text-lg mb-6">Адрес</div>
                    <ul className="font-medium">
                        <li className="mb-4 flex items-start">
                            <Image src={location} />
                            <p className="ml-3 w-72">Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент</p>
                        </li>
                        <li className="mb-4 flex items-center">
                            <Image src={phone} />
                            <p className="ml-3">+998 (90) 128 81 82</p>
                        </li>
                         <li className="mb-4 flex items-center">
                            <Image src={email} />
                            <p className="ml-3">Intex@gmail.com</p>
                        </li>
                        <li className="mb-4 flex items-center">
                            <Image src={time} />
                            <p className="ml-3">10:00 - 22:00 Без выходных</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer