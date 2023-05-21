
const Toys = ({ toy }) => {
    const { name, sellerName, email, photo, category, price, quantity, ratings, description } = toy || {}
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <div className="flex flex-col">
                                <td>Name:{sellerName}</td>
                                <td><img style={{ height: '30px' }} src={photo} alt="" /></td>
                            </div>
                            <td>$: {price}</td>
                            <td>{category}</td>
                            <td>{quantity}</td>
                            <td><button className='btn btn-primary'>Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Toys;