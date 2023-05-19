import user1 from '../../../assets/images/user/user1.png'
import user2 from '../../../assets/images/user/user2.png'
import user3 from '../../../assets/images/user/user1.png'
const Reviews = () => {
    return (
        <div >
            <h2 className="text-6xl text-[#fb6e50] font-bold text-center mt-4 mb-4 ">Client reviews are here</h2>
            <div className='bg-cyan-50 '>
                <div className="carousel w-full h-[650px]">
                    <div id="item1" className="carousel-item w-full grid grid-cols-1 md:grid-cols-2">
                        <img src={user1} className="w-full " />
                        <div className='m-5 p-5'>
                            <h1 className='text-4xl font-bold mb-5'> Impressive Car Toy with Realistic Features!</h1>
                            <p className='text-2xl font bold'>
                                The XYZ Car Toy exceeded my expectations with its impressive attention to detail. The sleek design and vibrant colors instantly caught my attention, and my son could not be happier. The sturdy construction ensures it can withstand rough play without any damage.

                                The remote control offers precise control, allowing my son to navigate the car effortlessly. The range is exceptional, ensuring uninterrupted fun. The working headlights and taillights are a standout feature, creating an immersive experience.
                            </p>
                            <p className='mt-8 text-orange-500 font-bold'>Ratings</p>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={user2} className="w-1/4 h-1/4" />
                        <div>
                            <h1> Durable and Exciting Car Toy for Endless Fun!</h1>
                            <p>
                                I recently bought the XYZ Car Toy for my nephew, and its been a hit! The quality of this toy car is outstanding. Its built to last and can handle crashes and rough play. The remote control is easy for kids to use, offering precise control over the cars movements.

                                The working headlights and taillights make the playtime even more exciting. The realistic lighting effects create an immersive experience. The battery life is impressive, allowing for extended play sessions without interruptions.
                            </p>
                            <p>ratings</p>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full ">
                        <img src={user3} className="w-1/4 h-1/4" />
                        <div>
                            <h1> Amazing Car Toy with Realistic Design!</h1>
                            <p>
                                The XYZ Car Toy is simply amazing! The attention to detail is remarkable, making it look like a miniature version of a real sports car. The vibrant colors and sleek design instantly captivate kids imaginations.

                                This car toy is built to withstand rough play. It has survived numerous crashes without any signs of damage. The remote control is user-friendly, allowing kids to easily maneuver the car around obstacles. The working headlights and taillights add a realistic touch, creating an immersive experience.

                                Overall, the XYZ Car Toy is a top-notch choice. It offers durability, realistic features, and hours of fun for any car enthusiast.
                            </p>
                            <p>ratings</p>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>

                </div>
            </div>

        </div>
    );
};

export default Reviews;