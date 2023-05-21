

const Banner = () => {



    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5403a7d0e4b0e9cf18a425fa/1590425083131-774XGT02P3SBSZ5T9CJE/banner.2.jpg?format=1000w")` }}>
            <div className="hero-overlay  bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Race Into Fun</h1>
                    <p className="mb-5 text-2xl font-bold">Ignite Your Imagination: Unleash Thrilling Adventures with Toy Cars!</p>
                    <button className="btn btn-primary bg-[#e43007] border-none">Get Started</button>
                </div>
            </div>
        </div>








    );
};

export default Banner;