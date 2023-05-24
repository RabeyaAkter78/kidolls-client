import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProviders';
import useTitle from '../../Routes/useTitle';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, } from 'firebase/auth';
import app from '../../firebase/Firebase.config';

const Auth = getAuth(app)
const Login = () => {
    useTitle('Login');
    const [setUser] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, loggedInUser => {
            // console.log('loggedUser', loggedInUser);
            setUser(loggedInUser)
        })
        return () => {
            unsubscribe();
        }

    }, [])



    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
            })

        if (/((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*[\\d~!@#$%^&*\\(\\)_+\\{\\}\\[\\]\\?<>|_]).{6,50})/.test(password)) {
            setError('incorrect password');
            return;
        }


    }
    // login with google:
    const provider = new GoogleAuthProvider();

    const handleLogInWithGoogle = () => {

        signInWithPopup(Auth, provider)
            .then(() => {
               
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message);
            })
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
                            <button onClick={handleLogInWithGoogle} className=' btn btn-success mb-5'>login with google</button>

                            <p className='text-center font-bold text-red-500'>{error}</p>
                            <p className='text-center font-bold text-success'>{success}</p>
                            <h2 className='text-center font-bold mt-8 mb-4'>Dont Have an account? <Link to='/register' className='text-blue-700'> Register</Link></h2>

                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default Login;