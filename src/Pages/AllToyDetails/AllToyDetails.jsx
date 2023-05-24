import { useLoaderData } from "react-router-dom";

const AllToyDetails = () => {
    const data = useLoaderData()
    console.log(data);

    const { _id,name,sellerName,description,photo , } = data;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src=
                    {photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{_id}</h2>
                    <p>Toy: {name}</p>
                    <p>Seller: {sellerName}</p>
                    <p> {description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToyDetails;