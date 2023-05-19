import {Link} from 'react-router-dom'
import img from '../../assets/images/banner/flat-404-error-template_23-2147741200.png'
const Error = () => {
    return (
        <div className='container mb-8'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        {/* <h1 className="mb-5 text-5xl font-bold">404</h1>
                        <p className="mb-5">Page Not Found</p> */}
                        <button className="btn btn-primary mt-32">
                            <Link to='/'>Go Back Home</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;