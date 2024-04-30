const CallToAction = () => {
    return (
        <div className="w-full bg-indigo-700 rounded-2xl">
            {/* :MAIN CONTAINER */}
            <div className="mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
                {/* ::Title */}
                <h2 className="space-y-2 text-3xl sm:text-4xl text-white font-extrabold uppercase">Sign up now to get 10% off</h2>
                {/* ::Text */}
                <p className="mt-4 text-lg text-indigo-200 leading-6">
                    Enjoy a special 10% discount when you sign up today! Our exclusive offer is your ticket to savings on all your favorite products. Don't miss out on this opportunity to unlock great deals and perks. Join our community today and start saving!
                </p>
                {/* ::Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-around items-center uppercase font-medium tracking-widest">
                    {/* Signup */}
                    <a href="#link" className="relative mb-5 sm:mb-0 px-5 py-3 w-48 rounded-md shadow bg-indigo-100 text-indigo-700 transform hover:bg-white active:top-0.5">Signup</a>
                    {/* Maybe later */}
                    <a href="#link" className="relative px-5 py-3 w-48 rounded-md shadow bg-indigo-500 text-indigo-100 hover:bg-indigo-600 active:top-0.5">Maybe later</a>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;