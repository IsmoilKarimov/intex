import Image from "next/image";

// imgs
import easypool from '../public/assets/imgs/intex-easy.svg'
import check from '../public/assets/imgs/check.svg'
// import checked from '../public/assets/imgs/checked.png'

const Pools = () => {
    return ( 
        <>
            <div className="pool container bg-neutral-50 mx-auto mb-40 rounded-2xl">
                <div className="title pt-10 pl-5 font-bold text-3xl mb-4">Бассейны от INTEX в Ташкенте</div>
                <div className="text title pl-5 text-textColor text-lg mb-32">Бассейны от intex отличаются обширным перечнем преимуществ, из которых можно выделить самые важные:</div>
                <div className="relative">
                    <Image src={easypool} alt='' className="mt-auto mx-auto" />
                    <div className="bg-white rounded-2xl p-3 flex items-center absolute top-5 z-10">
                        <Image src={check} alt='' className="p-4 mr-2 rounded-full bg-colorBlue" />
                        <span>Красивые и ярки цвета</span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Pools;