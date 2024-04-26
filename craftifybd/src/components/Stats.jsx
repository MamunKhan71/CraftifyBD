const Stats = () => {
    return (
        <>
            {/* Features */}
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="flex justify-between sm:gap-12 lg:grid-cols-3 lg:gap-8">
                    {/* Stats */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
                            Crafts Sold
                        </h4>
                        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                            10,000+
                        </p>
                        <p className="mt-1 text-gray-500 dark:text-neutral-500">
                            Over 10,000 unique craft items available.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
                            Customer Satisfaction
                        </h4>
                        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                            95.00%
                        </p>
                        <p className="mt-1 text-gray-500 dark:text-neutral-500">
                            95% positive feedback from satisfied customers.
                        </p>
                    </div>
                    {/* End Stats */}
                    {/* Stats */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
                            Global Reach
                        </h4>
                        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                            50+
                        </p>
                        <p className="mt-1 text-gray-500 dark:text-neutral-500">
                            Shipping to 50+ countries worldwide.
                        </p>
                    </div>
                    {/* End Stats */}
                    {/* Stats */}
                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">
                            Community Engagement
                        </h4>
                        <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
                            100+
                        </p>
                        <p className="mt-1 text-gray-500 dark:text-neutral-500">
                            100+ craft events and workshops.
                        </p>
                    </div>
                    {/* End Stats */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Features */}
        </>


    );
};

export default Stats;