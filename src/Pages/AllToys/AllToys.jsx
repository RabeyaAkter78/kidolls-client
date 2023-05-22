import useTitle from "../../Routes/useTitle";
import { useLoaderData } from 'react-router-dom';
import ShowAllToys from "../ShowAllToys/ShowAllToys";


const AllToys = () => {
    const alltoys = useLoaderData();
    useTitle('All-Toys');

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
                alltoys?.map(toy => <ShowAllToys
                    key={toy._id}
                    toy={toy}
                ></ShowAllToys>)
            }
        </div>
    );
};

export default AllToys;