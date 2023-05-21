import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import car7 from '../../../assets/images/gallery/car7.png'
import car8 from '../../../assets/images/gallery/car8.png'
import car9 from '../../../assets/images/gallery/car9.png'
import { useEffect, useState } from 'react';

const CategoryToys = () => {
    const [toys, settoys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/kidollsDetails')
            .then(res => res.json())
            .then(data => settoys(data))


    }, [])



    return (
        <div>
{/* {
    toys.map(toy=>)
} */}


            <div>
                <div>
                    <h2 className='text-3xl text-[#fb6e50] font-bold text-center mt-4  mb-5'>Chose Your Desired Cars</h2>
                </div>
                <Tabs className='text-center'>
                    <TabList >
                        <Tab >
                            <div className="tooltip" data-tip="Sports Car">
                                <img src={car7} alt="" />

                            </div>
                        </Tab>
                        <Tab >
                            <div className="tooltip" data-tip="Truck">
                                <img src={car8} alt="" />
                            </div>
                        </Tab>
                        <Tab >
                            <div className="tooltip" data-tip="Regular Car">
                                <img src={car9} alt="" />
                            </div>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CategoryToys;