const Banner = () => {
    return (
        <div className="carousel w-full bg-gradient-to-r">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/pink-toy-car-delivering-pink-rose-flower-blue-background-valentine-day-flowers-delivery-women-day-place-text_434420-1477.jpg" className="w-full h-[600px] " />
               

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div>
                        <h2 className="text-white text-6xl">Move To Your Dream Life</h2>
                        <button className="btn btn-active btn-secondary">Button</button>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/pastel-pink-retro-toy-car-with-big-pink-suitcase-light-blue-background-creative-travel-concept_434420-23.jpg" className="w-full h-[600px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://t4.ftcdn.net/jpg/04/85/15/13/360_F_485151389_jmQGn5JqlTPrWcZUNEkIJmACUhQERwnH.webp" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;