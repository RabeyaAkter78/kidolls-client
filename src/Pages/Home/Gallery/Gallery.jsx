import Marquee from "react-fast-marquee";
import car1 from '../../../assets/images/gallery/car1 (1).jpg'
import car2 from '../../../assets/images/gallery/car2.jpg'
import car3 from '../../../assets/images/gallery/car3.jpg'
import car4 from '../../../assets/images/gallery/car4.jpg'
import car5 from '../../../assets/images/gallery/car5.jpg'
import car6 from '../../../assets/images/gallery/car6.jpg'
// 
const Gallery = () => {
    return (
        <div className="mt-32 mb-16 gap-5 h-96">
            <h2  className="text-3xl text-[#fb6e50] font-bold text-center mt-4  mb-5">Chose Your Desired Car</h2>
            <Marquee>
                <img src={car1} alt="" />
                <img src={car2} alt="" />
                <img src={car3} alt="" />
                <img src={car4} alt="" />
                <img src={car5} alt="" />
                <img src={car6} alt="" />

            </Marquee>
        </div>
    );
};
export default Gallery;