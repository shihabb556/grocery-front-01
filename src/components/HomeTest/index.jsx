
import Features from "./Features";
import Footer from "./Footer";
import Banner from "./Banner";
import ProductCategory from "./ProductCategory";
import ProductSlider from "./ProductSection";
import ReviewSection from "./ReviewSection";
import "./style.css"
import Header from "../shared/Header";
import { useEffect, useRef } from "react";
import { loadCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const HomeTest = ()=>{
    const dispatch = useDispatch();
    const featureRef = useRef(null);

    const scrollToSection = (ref)=>{
        console.log("click ref ",ref);
        ref.current?.scrollIntoView({behaviour:'smooth'});
      };

    useEffect(() => {
        dispatch(loadCart());
      }, [dispatch]);
    
  

    return(
        <div>
            <Header scrollToSection={scrollToSection} featureRef={featureRef} />
            <div className="pt-5 mt-5 mx-auto px-4">
                <Banner />
                <Features featureRef={featureRef} />
                <ProductSlider/>
                <ProductCategory/>
                <ReviewSection/>
                <Footer/>
            </div>
        </div>
    );
}

export default HomeTest;