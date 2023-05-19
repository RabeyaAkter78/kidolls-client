import { Link } from 'react-router-dom'
const Login = () => {



    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('login page location', location);

        console.log(email, password);


    }


    return (
        <div>
            <form onSubmit={handleLogin} className=' mb-12'>
                <div className="w-full bg-base-200">
                    <h2 className='text-center text-blue-700 font-bold text-4xl'>Login</h2>
                    <div className="hero-content">

                        <div className="card w-full max-w-lg shadow-2xl bg-base-500">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                            <button className=' btn btn-success mb-5'>login with google</button>
                            <button className='btn btn-success'>login with Gamil</button>
                            <h2 className='text-center font-bold mt-8 mb-4'>Don't Have an account? <Link to='/register' className='text-blue-700'> Register</Link></h2>
                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;