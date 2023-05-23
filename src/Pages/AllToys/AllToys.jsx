import useTitle from "../../Routes/useTitle";
import { Link, useLoaderData } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import {  useEffect, useState } from "react";

const AllToys = () => {
    const [search, setSearch] = useState("");
    const allToys = useLoaderData();
    useTitle('All-Toys');

    useEffect(() => {
        fetch(`http://localhost:5000/searchToys/${search}`)
                .then(res => res.json())
                .then(data => {
                    setSearch(data);
                });
        

    },[search])


    const handleSearch = () => {
       console.log(search)
    }
    // const handleSearch = () => {
    //     fetch(`http://localhost:5000/searchToys/${search}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         });
    // }






    return (
        <div>
            {/* <h2 className="text-center text-2xl text-[#e05637] font-bold">All Toys</h2> */}
            <div className="flex justify-center items-center mt-8 mb-8">

                <input onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-md " />

                <button onClick={handleSearch} className="btn btn-primary"> <FaSearch /></button>
            </div>
            <div className="overflow-x-auto ">



                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Seller</th>
                            <th>PRICE</th>
                            <th>SUB-CATEGORY</th>
                            <th>QUANTITY</th>
                            <th>DETAILS</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            allToys?.map((toy, index) =>
                                <tr
                                    key={toy._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3 ">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-20 h-18">
                                                    <img className=" w-15 h-12" src={toy.photo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{toy.category}</div>
                                                <div className="text-sm opacity-50">Seller:{toy.sellerName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* <div className="flex flex-col font-bold ">
                                <td><img style={{ height: '30px' }} src={toy.photo} alt="" /></td>
                                <td>Seller:{toy.sellerName}</td>

                            </div> */}
                                    <td className="font-bold">$: {toy.price}</td>
                                    <td className="font-bold">{toy.category}</td>
                                    <td className="font-bold">{toy.quantity}</td>
                                    <td><button className="btn btn-primary"><Link to="/singleToyDetails">Details</Link></button></td>

                                </tr>



                                // <Toys
                                //     key={toy._id}
                                //     toy={toy}
                                //     index={index}
                                // ></Toys>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;