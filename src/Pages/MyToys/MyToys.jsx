import { useLoaderData } from 'react-router-dom';
import Toys from '../Toys/Toys';


const MyToys = () => {
    const toys = useLoaderData();

    // console.log(toys)

    // const { name } = toys || {};
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
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
                {
                    toys?.map(toy => <Toys
                        key={toy._id}
                        toy={toy}
                    ></Toys>)
                }
            </div>


        </div>
    );
};


{/* <div className="overflow-x-auto">
<table className="table table-zebra w-full">
    {/* head 
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
    <tbody>
        {/* row 1
        <tr>
            <th>1</th>
            <td>NAme:</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td><button className='btn btn-primary'>Details</button></td>
        </tr>
    </tbody>
</table>
</div> */}

export default MyToys;