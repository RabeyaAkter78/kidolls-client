
const Blogs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" m-5 p-5">
                    <div className="">
                        <h1 className="text-5xl font-bold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p className="py-6">A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. </p>
                        <p>Access token and refresh token should not be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.
                            Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-bold">2. Compare SQL and NoSQL databases?</h1>
                        <p className="py-6">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-bold">3. What is express js? What is Nest JS?</h1>
                        <p className="py-6">NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs.</p>
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-bold">4. What is MongoDB aggregate and how does it work?</h1>
                        <p className="py-6">What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;