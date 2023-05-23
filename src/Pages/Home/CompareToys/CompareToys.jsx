
const CompareToys = () => {
    return (
        <div className="mt-28 mb-14">

            <h2 className="text-3xl text-[#fb6e50] font-bold text-center mt-28  mb-12">Compare two toys</h2>
            <div className="hero  bg-base-200 mb-4 ">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://www.mackoviahracky.sk/image/handle/image_bank/120219-h-smoby-auticka.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Car-1</span>
                                </label>
                                <input type="text" placeholder="Car-1" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Car-2</span>
                                </label>
                                <input type="text" placeholder="Car-2" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Compare</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompareToys;