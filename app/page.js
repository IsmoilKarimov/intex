import React from "react"
import Image from "next/image";
// import PopularProducts from "@/components/pop-products";
import PoolIntex from "@/components/pool-intex";

// images
import mainImg from '../public/assets/imgs/main-img.svg';

const Home = () => {
    return(
        <main>
            {/*  first section  */}
            <div className="first-section">
                <div className="container bg-neutral-50 mx-auto mb-32 flex items-center rounded-2xl">
                    <div className="grid-rows-6 w-full my-24 pl-8">
                        <div className="title text-5xl text-zinc-800 mb-4 font-bold">Бассейны от intex в Ташкенте</div>
                        <p className="text text-textColor w-9/12 mb-12">Бассейны от intex - доступная по цене, качественная, надежная и экологически чистая продукция, которая предназначена для приятного отдыха всей семьи.</p>
                        <button type="submit" className="bg-blue-900 text-white rounded-xl py-4 px-6">Заказать звонок</button>
                    </div>
                    <div className="grid-rows-6 w-full">
                        <Image src={mainImg} className='ml-auto'/>
                    </div>
                </div>
            </div>
            {/* End of first section */}
            {/* <PopularProducts /> */}
            <PoolIntex />
        </main>
    )   
}
export default Home