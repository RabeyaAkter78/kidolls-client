import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        console.log(updatedForm)


        fetch(`https://kidolls-server.vercel.app/updateData/${data._id}`, {
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
        form.reset();
        Swal.fire(
            'Success!',
            'Updated Successfully!',
            'success'
          )
    }

    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={data.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body  text-center ">
                    <form className='flex flex-col justify-center items-center' onSubmit={handleUpdate}>
                        <div>
                            <input className='border border-solid border-black p-1 rounded mb-2' type="text" name='price' placeholder='price' />
                            <input className='border border-solid border-black p-1 rounded mb-2' type="text" name='quantity' placeholder='quantity' />
                            <input className='border border-solid border-black p-1 rounded mb-2' type="text" name='description' placeholder='description' />
                        </div>
                        <div className="card-actions">
                            <input className='bg-teal-950 text-white m-8 p-2 rounded' type="submit" value="Submit" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Updatedata;