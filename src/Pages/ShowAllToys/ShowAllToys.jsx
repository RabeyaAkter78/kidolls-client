
const ShowAllToys = ({toy,index}) => {
    const { sellerName, photo, category, price, quantity,} = toy || {}
    return (
        <div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>{index}</th>
                        <div className="flex flex-col">
                            <td>Name:{sellerName}</td>
                        </div>
                        <td>$: {price}</td>
                        <td>{category}</td>
                        <td>{quantity}</td>
                        <td><button className='btn btn-primary'>DETAILS</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ShowAllToys;