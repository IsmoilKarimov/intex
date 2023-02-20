import Link from "next/link"


const InflatablePools = () => {
    return(
        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-4xl">Надувные бассейны</div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium text-base">Сортировка</span>
                        
                        <div className="dropdown relative w-44 h-11 bg-bgColor rounded-lg ml-3 transition duration-700 ease-in-out">
                            <button className="flex w-full items-center justify-between px-3 py-3">
                                <div className="mr-1 cursor-pointer">По А-Я</div>
                                <svg className="arrow-bottom fill-current h-4 w-4 text-colorBlue cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                            </button>
                            <ul className="dropdown-menu hidden w-52 p-3 bg-white shadow-md h-20x -ml-4 rounded-xl">
                                <li  className="mb-2">
                                    <Link href="#">Цена по убыванию</Link>
                                </li>
                                <li>
                                    <Link href="#">Цена по возрастанию</Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default InflatablePools