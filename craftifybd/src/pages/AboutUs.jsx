const AboutUs = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Meet Our Experts
                    </h2>
                    <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        venenatis neque enim, congue bibendum at.
                    </p>
                </div>
                <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/project-manager.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            Emily Johnson
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">
                            Project Manager
                        </p>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/coo.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            William Cooper
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">COO</p>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/founder.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            Ava Smith
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">
                            Founder
                        </p>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/senior developer.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            Harper Martinez
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">
                            Senior Developer
                        </p>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/product-designer.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            Noah Wilson
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">
                            Product Designer
                        </p>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/devops.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            Caleb Mitchell
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">
                            DevOps Engineer
                        </p>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/business-analyst.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            Ethan Johnson
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">
                            Business Analyst
                        </p>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/ui-ux.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            Abigail Turner
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">
                            UI/UX Designer
                        </p>
                    </div>
                    <div className="hidden lg:block"></div>
                    <div>
                        <img
                            className="object-cover mx-auto rounded-lg w-28 h-28"
                            src="https://www.tailwindtap.com/assets/components/team-component/expert-team/hr.jpg"
                            alt=""
                        />
                        <p className="mt-8 text-lg font-semibold leading-tight text-black">
                            Charlotte Thompson
                        </p>
                        <p className="mt-1 text-base leading-tight text-gray-600">H.R</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;