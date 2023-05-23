import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
    const data = useLoaderData()
    console.log(data);

    fetch(`http://localhost:5000/allToys/${data._id}`)
        .then(res => res.json())
        .then(result => { console.log(result) })

    return (
        <div> 
            <h2 className="text-center font-semibold text-2xl text-[#ee5633]">Detils of this {data.category} Toy Car</h2>
            <div className="card grid md:grid-cols-2  card-side bg-base-100 shadow-xl mt-28 mb-14 ">
                <figure className="px-10 pt-10">
                    <img src={data.photo} alt="car" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">Toy Name: {data.name}</h2>
                    <h2 className="card-title">Seller: {data.sellerName}</h2>
                    <h2 className="card-title">Email: {data.email}</h2>
                    <h2 className="card-title">Category: {data.category}</h2>
                    <h2 className="card-title">Price: $ {data.price}</h2>
                    <h2 className="card-title">Quantity: {data.quantity}</h2>
                    <h2 className="card-title">Ratings: {data.ratings}<FaStar></FaStar> </h2>
                    <h2 className="card-title">Descriptions: {data.description}</h2>

                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;