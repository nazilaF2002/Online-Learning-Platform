import Footer from "../footer/Footer";
import Teachers from "./Teachers";
import AboutUs from "./about";
import Carousel from "./carousel";
import Testimonials from "./testimonials";

export default function Home(){
    return(
    <>
    <div className="mt-5 _overflow">
       <Carousel/>
        <AboutUs/>
        <Teachers/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
    );
}