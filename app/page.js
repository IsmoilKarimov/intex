import React from "react"
import PopularProducts from "@/components/home/pop-products";
import PoolIntex from "@/components/home/poolTashkent";
import MainPage from "@/components/home/mainPage";
import NewProducts from "@/components/home/new-products";
import PurchseDiscount from "@/components/home/purchase-discount";
import WhyUs from "@/components/home/whyUs";
import DiscountProducts from "@/components/home/discount-products";
import Consultation from "@/components/home/consultation";

const Home = () => {
    return(
        <main>
            <MainPage />
            <PopularProducts />
            <PoolIntex />
            <NewProducts />
            <PurchseDiscount />
            <WhyUs />
            <DiscountProducts />
            <Consultation />
        </main>
    )   
}
export default Home