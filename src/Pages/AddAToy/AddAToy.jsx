import { useContext} from "react";
import useTitle from "../../Routes/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";
import toast, { Toaster } from 'react-hot-toast';
// import MyToys from "../MyToys/MyToys";

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    // const [toys, setToys] = useState([]);
    useTitle('Add-Toy');
// console.log(toys);
    // useEffect(() => {
    //     fetch('http://localhost:5000/myToys')
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    // }, [])


    const handleAddToys = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const ratings = form.ratings.value;
        const description = form.description.value;

        const addToy = { name, sellerName, email, photo, category, price, quantity, ratings, description };
        console.log(addToy);
        fetch("http://localhost:5000/addAToy", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    toast('Added Successfully!');
                }
                form.reset();
            })
        console.log(addToy);
    };
    const handleToast = () => {
    };

    return (
        <div>
            {/* <div>
                {
                    toys?.map(toy => {
                        <MyToys
                            key={toy._id}
                            toy={toy}
                        ></MyToys>
                    })
                }

            </div> */}
            <form onSubmit={handleAddToys} className=' mb-12'>
                <div className=" w-full bg-base-200">
                    <h2 className='text-center text-blue-700 font-bold text-4xl'>Add Toy</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full  shadow-2xl bg-base-100">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Toy Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="sellerName" placeholder="Seller Name" className="input input-bordered" defaultValue={user?.displayName} required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email}
                                placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>

                            <input type="text" name='category' placeholder="Toy Category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" name='ratings' placeholder="Ratings" className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Details Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Details Description" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleToast} className="btn btn-primary">Add</button>
                        <Toaster />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;