import { useLoaderData } from 'react-router-dom'
const Updatedata = () => {
    const data = useLoaderData()
    console.log(data)
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedForm = { price, quantity, description }


        fetch(`http://localhost:5000/updateData/${data._id}`, {
            method: 'PATCH',
            body: JSON.stringify(
                updatedForm
            ),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={data.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <form onSubmit={handleUpdate}>
                        <input type="text" name='price' placeholder='price' />
                        <input type="text" name='quantity' placeholder='quantity' />
                        <input type="text" name='description' placeholder='description' />
                        <input className='bg-red-600' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Updatedata;