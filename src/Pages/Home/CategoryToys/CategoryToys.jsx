import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import car7 from '../../../assets/images/gallery/car7.png'
import car8 from '../../../assets/images/gallery/car8.png'
import car9 from '../../../assets/images/gallery/car9.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryToys = () => {
    const [active, setActive] = useState("sports");
    const [categories, setCAtegory] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categorysToys?activeCategory=${active}`)
            .then(res => res.json())
            .then(data => setCAtegory(data))
    }, [active])
    console.log(categories);
    // const handleActive = (event) => {
    //     setActive(event);
    // }

    return (
        <div>
            <div>
                {/* <div>
                    <h2 className='text-3xl text-[#fb6e50] font-bold text-center mt-4  mb-5'>Chose Your Desired Cars</h2>
                </div> */}
                <Tabs className='text-center'>
                    <TabList >
                        <Tab >
                            <div
                                onClick={() => setActive("sports")}
                                className="tooltip" data-tip="Sports Car">
                                <img src={car7} alt="" />

                            </div>
                        </Tab>
                        <Tab >
                            <div
                                onClick={() => setActive("Truck")}
                                className="tooltip" data-tip="Truck">
                                <img src={car8} alt="" />
                            </div>
                        </Tab>
                        <Tab >
                            <div
                                onClick={() => setActive("regular")}
                                className="tooltip" data-tip="Regular Car">
                                <img src={car9} alt="" />
                            </div>
                        </Tab>
                    </TabList>


                    <TabPanel>
                        <div className=' grid grid-cols-3'>
                            {
                                categories?.map(category =>
                                    <div
                                        key={category._id}
                                    >
                                        <div data-aos="fade-up">
                                            <div className='card bg-base-100 w-96 shadow-xl font-bold text-xl '>
                                                <img className='h-60' src={category.photo} alt="" />
                                                <h2>Name: {category.name}</h2>
                                                <h2>Price:$  {category.price}</h2>
                                                <h2>Ratings: {category.ratings}   </h2>
                                                <button className="btn btn-primary mt-2">
                                                    <Link to="catDetails" >View Details</Link>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-3'>
                            {
                                categories?.map(category =>
                                    <div
                                        key={category._id}
                                    >
                                        <div className='card bg-base-100 w-96 shadow-xl font-bold text-xl '>
                                            <img className='h-60' src={category.photo} alt="" />
                                            <h2>Name: {category.name}</h2>
                                            <h2>Price:$  {category.price}</h2>
                                            <h2>Ratings: {category.ratings}   </h2>
                                            <button className="btn btn-primary mt-2">Buy Now</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3'>
                            {
                                categories?.map(category =>
                                    <div
                                        key={category._id}
                                    >
                                        <div className='card bg-base-100 w-96 shadow-xl font-bold text-xl '>
                                            <img className='h-60' src={category.photo} alt="" />
                                            <h2>Name: {category.name}</h2>
                                            <h2>Price:$  {category.price}</h2>
                                            <h2>Ratings: {category.ratings}   </h2>
                                            <button className="btn btn-primary mt-2">Buy Now</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CategoryToys;