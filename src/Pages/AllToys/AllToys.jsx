import Toys from "../Toys/Toys";
import { useLoaderData } from 'react-router-dom';


const AllToys = () => {
    const alltoys = useLoaderData();


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Seller</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>QUANTITY</th>
                            <th>VIEW dETAILS</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                alltoys?.map(toy => <Toys
                    key={toy._id}
                    toy={toy}
                ></Toys>)
            }
        </div>
    );
};

export default AllToys;