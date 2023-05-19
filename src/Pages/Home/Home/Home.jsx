import useTitle from "../../../Routes/useTitle";
import CategoryToys from "../CategoryToys/CategoryToys";
import CompareToys from "../CompareToys/CompareToys";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import Banner from "./Banner/Banner";

const Home = () => {
    useTitle('Home')
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <CategoryToys></CategoryToys>
            <Reviews></Reviews>
            <CompareToys></CompareToys>
        </div>
    );
};

export default Home;