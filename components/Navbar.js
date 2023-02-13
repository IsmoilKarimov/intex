import Link from "next/link";
import React from "react";
import styles from '../styles/Home.module.css'
import Image from "next/image";

// imgs
import logo from '../public/assets/imgs/logo.svg'
import arrowBottom from '../public/assets/imgs/bottom.svg'
import search from '../public/assets/imgs/search.svg'
import user from '../public/assets/imgs/user.svg'
import backet from '../public/assets/imgs/backet.svg'
import lang from '../public/assets/imgs/rus.svg'

const Navbar = () => {
    return(
        <div className='bg-neutral-50 w-full mb-10'>    
            <div className='top container mx-auto flex justify-between py-3 text-sm font-medium text-textColor'>
                <span className={styles.title}>10:00 - 22:00 Без выходных</span>
                <Link href="#" className='font-bold text-colorBlue ml-56'>+998(90)128 81 82</Link>
                <ul className="flex justify-between">
                    <li className="px-3">
                        <Link href="#" className='text-textColor'>О продукт</Link>
                    </li>
                    <li className="px-3">
                        <Link href="#" className='text-textColor'>Почему мы?</Link>
                    </li>
                    <li className="px-3">
                        <Link href="#" className='text-textColor'>Консултатция</Link>
                    </li>
                    <li className="px-3">
                        <Link href="#" className='text-textColor'>Контакты</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.line}></div>
            <nav>
                <div className="container py-7 mx-auto flex items-center justify-between">
                    <div className="logo mr-4">
                        <Image src={logo} alt="" />
                    </div>
                    <ul className="navbar flex items-center font-medium">
                        <li className="flex items-center px-3">
                            <span className="mr-1 cursor-pointer"><Link href="#">Категории</Link></span>
                            <Image src={arrowBottom} alt=""/>
                        </li>
                        <li className="px-4 ml-2 cursor-pointer"><Link href="#">Популярное</Link></li>
                        <li className="px-4 cursor-pointer"><Link href="#">Новинки</Link></li>
                        <li className="px-4 cursor-pointer"><Link href="#">На скидке</Link></li>
                        
                    </ul>
                    <div className="search flex items-center bg-white py-2 px-3 rounded-xl w-80 ml-9 cursor-pointer">
                        <Image src={search} alt="" className="mr-2"/>
                        <input type="text" placeholder="Поиск" className="w-11/12" />
                    </div>
                    <div className="backet ml-20x cursor-pointer">
                        <Image src={backet} alt=""/>
                    </div>
                    <div className="user cursor-pointer">
                        <Image src={user} alt=""/>
                    </div>
                    <div className="lang bg-white py-2 px-3 flex items-center rounded-lg cursor-pointer">
                        <Image src={lang} className='mr-2' alt=""/>
                        <span className="mr-2">Ru</span>
                        <Image src={arrowBottom} alt=""/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar