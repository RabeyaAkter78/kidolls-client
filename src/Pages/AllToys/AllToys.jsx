import useTitle from "../../Routes/useTitle";
import { useLoaderData } from 'react-router-dom';


const AllToys = () => {
    const allToys = useLoaderData();
    useTitle('All-Toys');

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Seller</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>QUANTITY</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys?.map((toy, index) =>
                                <tr
                                    key={toy._id}
                                >
                                    <th>{index + 1}</th>
                                    <div className="flex flex-col">
                                        <td>Name:{toy.sellerName}</td>
                                        <td><img style={{ height: '30px' }} src={toy.photo} alt="" /></td>
                                    </div>
                                    <td>$: {toy.price}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.quantity}</td>
                                    
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