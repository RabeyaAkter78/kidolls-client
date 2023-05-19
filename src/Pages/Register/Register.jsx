// import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom'
// import app from '../../firebase/Firebase.config';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../Routes/useTitle';



// const auth = getAuth(app)
const Register = () => {
    const { createUser, updateUserData } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    useTitle('Register')

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess('');
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.email.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log('login page location', location);

        console.log(name, photoUrl, email, password);

        if (password.length < 6) {
            setError(' Password should be at least 6 characters');
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserData(name, photoUrl)
                    .then((result) => {
                        const createdUser=result.user;
                        console.log(createdUser);
                    })
                    .catch(err => console.log(err.message));
            })
            .catch(err => setError(err?.message))
            form.reset();
    }

    return (
        <div>

            <form onSubmit={handleRegister} className=' mb-12'>
                <div className=" w-full bg-base-200">
                    <h2 className='text-center text-blue-700 font-bold text-4xl'>Register</h2>
                    <div className="hero-content">

                        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <h2 className='text-center font-bold'>Already Have an account? <Link to='/login' className='text-blue-700'> Login</Link></h2>
                            </div>
                            <div className='text-center font-bold'>
                                <p>{success}</p>
                                <p>{error}</p>
                            </div>
                        </div>
                    </div>


                </div>

            </form>
        </div>
    );
};

export default Register;