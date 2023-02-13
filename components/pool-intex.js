import React from "react";
import Image from "next/image";
import styles from '../styles/Pool-intex.module.css'

// imgs
import easypool from '../public/assets/imgs/intex-easy.svg'
import checked from '../public/assets/imgs/checked.svg'

const PoolIntex = () => {
    return ( 
        <>
            <div className="pool container bg-neutral-50 mx-auto mb-40 rounded-2xl relative">
                <div className="title pt-10 pl-5 font-bold text-3xl mb-4">Бассейны от INTEX в Ташкенте</div>
                <div className="text title pl-5 text-textColor text-lg mb-32">Бассейны от intex отличаются обширным перечнем преимуществ, из которых можно выделить самые важные:</div>
                <div>
                    <Image src={easypool} alt="" className="mx-auto" />
                    <div className={` ${styles.titleOne} bg-white rounded-2xl p-3 flex items-center absolute`}>
                        <div className="p-2 mr-2 rounded-full bg-colorBlue">
                            <Image src={checked} alt="" className="w-4 h-4" />
                        </div>
                        <span>Прочность</span>
                    </div>
                    <div className={` ${styles.titleTwo} bg-white rounded-2xl p-3 flex items-center absolute`}>
                        <div className="p-2 mr-2 rounded-full bg-colorBlue">
                            <Image src={checked} alt=""  className="w-4 h-4"/>
                        </div>
                        <span>Красивые и ярки цвета</span>
                    </div>
                    <div className={` ${styles.titleThree} bg-white rounded-2xl p-3 flex items-center absolute`}>
                        <div className="p-2 mr-2 rounded-full bg-colorBlue">
                            <Image src={checked} alt=""  className="w-4 h-4"/>
                        </div>
                        <span>Высокое качество</span>
                    </div>
                    <div className={` ${styles.titleFour} bg-white rounded-2xl p-3 flex items-center absolute`}>
                        <div className="p-2 mr-2 rounded-full bg-colorBlue">
                            <Image src={checked} alt=""  className="w-4 h-4"/>
                        </div>
                        <span>Простота установки</span>
                    </div>
                    <div className={`${styles.titleFive}  bg-white rounded-2xl p-3 flex items-center absolute`}>
                        <div className="p-2 mr-2 rounded-full bg-colorBlue">
                            <Image src={checked} alt=""  className="w-4 h-4"/>
                        </div>
                        <span>Стильный дизайн</span>
                    </div>
                </div>
            </div>
        </>
     );
}
export default PoolIntex;