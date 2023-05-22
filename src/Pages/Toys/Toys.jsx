
const Toys = ({ toy,index }) => {
    const { sellerName, photo, category, price, quantity, } = toy || {}
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                   
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{index+1}</th>
                            <div className="flex flex-col">
                                <td>Name:{sellerName}</td>
                                <td><img style={{ height: '30px' }} src={photo} alt="" /></td>
                            </div>
                            <td>$: {price}</td>
                            <td>{category}</td>
                            <td>{quantity}</td>
                            <td><button className='btn btn-primary'>UPDATE</button></td>
                            <td><button className='btn btn-primary'>DELETE</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Toys;