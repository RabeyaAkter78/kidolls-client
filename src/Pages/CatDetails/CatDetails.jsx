
const CatDetails = ({props}) => {

    return (
        <div>
            <h2 className="text-center font-semibold text-2xl text-[#ee5633]">Detils of this  Toy Car</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">name: </h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatDetails;