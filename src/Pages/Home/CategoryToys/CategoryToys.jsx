import {Link} from 'react-router-dom'
const CategoryToys = () => {
    return (
        <div className="dropdown dropdown-hover  my-4 flex justify-center items-center">
            <label tabIndex={0} className="text-6xl text-pink-700 font-bold ">Shop By Category</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link>sports car</Link></li>
                <li><Link> regular car</Link></li>
                <li><Link> mini police car</Link></li>
            </ul>
        </div>
    );
};

export default CategoryToys;