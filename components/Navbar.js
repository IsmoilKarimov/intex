import Link from "next/link";
import React from "react";
import styles from '../styles/Home.module.css'
import Image from "next/image";

// imgs
import logo from '../public/assets/imgs/logo.svg'
// import arrowBottom from '../public/assets/imgs/bottom.svg'
import search from '../public/assets/imgs/search.svg'
import user from '../public/assets/imgs/user.svg'
import backet from '../public/assets/imgs/backet.svg'
import ru from '../public/assets/imgs/rus.svg'
import uz from '../public/assets/imgs/uzb.svg'
import eng from '../public/assets/imgs/usa.svg'

const Navbar = () => {
    return(
        <>
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
                        
                        <li className="dropdown relative">
                            <button className="flex items-center px-3 py-3">
                                <span className="mr-1 cursor-pointer"><Link href="#">Категории</Link></span>
                                <svg className="arrow-bottom fill-current h-4 w-4 text-colorBlue cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </button>
                            <ul className="dropdown-menu drop-shadow-md absolute hidden bg-white text-neutral-700 pt-1 rounded-xl w-72 ml-5 font-normal">
                                <li>
                                    <Link href="#" className="rounded-xl bg-white hover:bg-white py-2 px-4 block whitespace-no-wrap">Надувные бассейны</Link>
                                </li>
                                <li>
                                    <Link href="#" className="rounded-xl bg-white hover:bg-white py-2 px-4 block whitespace-no-wrap">Каркасные бассейны</Link>
                                </li>
                                <li>
                                    <Link href="#" className="rounded-xl bg-white hover:bg-white py-2 px-4 block whitespace-no-wrap">Все чистки бассейна</Link>
                                </li>
                                <li>
                                    <Link href="#" className="rounded-xl bg-white hover:bg-white py-2 px-4 block whitespace-no-wrap">Аксессуары для бассейна</Link>
                                </li>
                            </ul>
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
                    <div className="bg-white py-2 px-3 rounded-lg cursor-pointer dropdown relative">
                        <button className="flex items-center">
                            <Image src={ru} className='mr-2' alt=""/>
                            <span className="mr-2">Ru</span>
                            <svg className="arrow-bottom fill-current h-4 w-4 text-colorBlue cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                        </button>
                        <ul className="dropdown-menu drop-shadow-sm absolute hidden bg-white text-neutral-700 mt-2 py-1 rounded-xl w-full font-normal left-0">
                            <li>
                                <Link href="#" className="flex rounded-xl bg-white active:bg-white py-1 px-4">
                                    <Image src={uz} className='mr-2' alt=""/>
                                    <span className="mr-2">Uz</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex rounded-xl bg-white active:bg-white py-1 px-4">
                                    <Image src={ru} className='mr-2' alt=""/>
                                    <span className="mr-2">Ru</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex rounded-xl bg-white active:bg-white py-1 px-4">
                                    <Image src={eng} className='mr-2' alt=""/>
                                    <span className="mr-2">Eng</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Navbar