import Image from "next/image";


// imgs
import person from '../../public/assets/imgs/person.jpg'
import car from '../../public/assets/imgs/car.jpg'
import mainIntex from '../../public/assets/imgs/intex.jpg'

const WhyUs = () => {
    return ( 
        <>
            <div className="container mb-40 mx-auto">
                <div className="title font-bold text-3xl mb-10">Почему нужно выбрать нас?</div>  
                <div className="flex flex-row items-center justify-between space-x-5">
                    <div className="rounded-xl basis-1/3"> 
                        <Image src={person} alt="" className="w-full mb-4"/>
                        <div>
                            <div className="text-lg font-bold mb-3">Опыт</div>
                            <p>Профессионализм наших сотрудников</p>
                        </div>
                    </div>
                    <div className="rounded-xl basis-1/3"> 
                        <Image src={car} alt="" className="w-full mb-4"/>
                        <div>
                            <div className="text-lg font-bold mb-3">Доставка</div>
                            <p>Бесплатная доставка по городу</p>
                        </div>
                    </div>
                    <div className="rounded-xl basis-1/3"> 
                        <Image src={mainIntex} alt="" className="w-full mb-4"/>
                        <div>
                            <div className="text-lg font-bold mb-3">Качество</div>
                            <p>Прочные, качественные бассейны</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default WhyUs;