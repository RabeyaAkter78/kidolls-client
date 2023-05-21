
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
                            <div>
                                <td>Name:{sellerName}</td>
                                <td><img src={photo} alt="" /></td>
                            </div>                            
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td><button className='btn btn-primary'>Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Toys;