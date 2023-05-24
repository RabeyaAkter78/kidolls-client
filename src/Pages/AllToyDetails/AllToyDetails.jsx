import { useLoaderData } from "react-router-dom";

const AllToyDetails = () => {
    const data = useLoaderData()
    console.log(data);

    const { name,sellerName,description,photo , price,email} = data;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="px-10 pb-10">
                    <img src=
                    {photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className=" items-center mt-14 font-semibold ">
                    {/* <h2 className="card-title">{_id}</h2> */}
                    <p>Toy: {name}</p>
                    <p>Seller: {sellerName}</p>
                    <p>Email: {email}</p>
                    <p>Price:$ {price}</p>
                    <p>Seller: {sellerName}</p>
                    <p>Description: {description}</p>
                    <div className="card-actions m-4">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToyDetails;