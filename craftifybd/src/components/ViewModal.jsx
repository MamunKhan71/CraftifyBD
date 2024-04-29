const ViewModal = () => {
    return (
        <>
            <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-full-screen-modal"
            >
                Full screen
            </button>
            <div
                id="hs-full-screen-modal"
                className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            >
                <div className="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full max-h-full h-full">
                    <div className="flex flex-col bg-white pointer-events-auto max-w-full max-h-full h-full dark:bg-neutral-800">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                Modal title
                            </h3>
                            <button
                                type="button"
                                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                                data-hs-overlay="#hs-full-screen-modal"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className="mt-1 text-gray-800 dark:text-neutral-400">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 mt-auto border-t dark:border-neutral-700">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                data-hs-overlay="#hs-full-screen-modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-full-screen-modal-below-sm"
            >
                Full screen below sm
            </button>
            <div
                id="hs-full-screen-modal-below-sm"
                className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            >
                <div className="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full max-h-full h-full sm:hs-overlay-open:mt-10 sm:mt-0 sm:max-w-lg sm:max-h-none sm:h-auto sm:mx-auto">
                    <div className="flex flex-col bg-white pointer-events-auto max-w-full max-h-full h-full sm:max-w-lg sm:max-h-none sm:h-auto sm:border sm:rounded-xl sm:shadow-sm dark:bg-neutral-800 sm:dark:border-neutral-700">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                Modal title
                            </h3>
                            <button
                                type="button"
                                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                                data-hs-overlay="#hs-full-screen-modal-below-sm"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className="mt-1 text-gray-800 dark:text-neutral-400">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700 mt-auto sm:mt-0">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                data-hs-overlay="#hs-full-screen-modal-below-sm"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-full-screen-modal-below-md"
            >
                Full screen below md
            </button>
            <div
                id="hs-full-screen-modal-below-md"
                className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            >
                <div className="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full max-h-full h-full md:hs-overlay-open:mt-10 md:mt-0 md:max-w-lg md:max-h-none md:h-auto md:mx-auto">
                    <div className="flex flex-col bg-white pointer-events-auto max-w-full max-h-full h-full md:max-w-lg md:max-h-none md:h-auto md:border md:rounded-xl md:shadow-sm dark:bg-neutral-800 md:dark:border-neutral-700">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                Modal title
                            </h3>
                            <button
                                type="button"
                                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                                data-hs-overlay="#hs-full-screen-modal-below-md"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className="mt-1 text-gray-800 dark:text-neutral-400">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t mt-auto md:mt-0 dark:border-neutral-700">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                data-hs-overlay="#hs-full-screen-modal-below-md"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-full-screen-modal-below-lg"
            >
                Full screen below lg
            </button>
            <div
                id="hs-full-screen-modal-below-lg"
                className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            >
                <div className="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full max-h-full h-full lg:hs-overlay-open:mt-10 lg:mt-0 lg:max-w-lg lg:max-h-none lg:h-auto lg:mx-auto">
                    <div className="flex flex-col bg-white pointer-events-auto max-w-full max-h-full h-full lg:max-w-lg lg:max-h-none lg:h-auto lg:border lg:rounded-xl lg:shadow-sm dark:bg-neutral-800 lg:dark:border-neutral-700">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                Modal title
                            </h3>
                            <button
                                type="button"
                                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                                data-hs-overlay="#hs-full-screen-modal-below-lg"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className="mt-1 text-gray-800 dark:text-neutral-400">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t mt-auto lg:mt-0 dark:border-neutral-700">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                data-hs-overlay="#hs-full-screen-modal-below-lg"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-overlay="#hs-full-screen-modal-below-xl"
            >
                Full screen below xl
            </button>
            <div
                id="hs-full-screen-modal-below-xl"
                className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
            >
                <div className="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full max-h-full h-full xl:hs-overlay-open:mt-10 xl:mt-0 xl:max-w-xl xl:max-h-none xl:h-auto xl:mx-auto">
                    <div className="flex flex-col bg-white pointer-events-auto max-w-full max-h-full h-full xl:max-w-lg xl:max-h-none xl:h-auto xl:border xl:rounded-xl xl:shadow-sm dark:bg-neutral-800 xl:dark:border-neutral-700">
                        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                            <h3 className="font-bold text-gray-800 dark:text-white">
                                Modal title
                            </h3>
                            <button
                                type="button"
                                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                                data-hs-overlay="#hs-full-screen-modal-below-xl"
                            >
                                <span className="sr-only">Close</span>
                                <svg
                                    className="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">
                            <p className="mt-1 text-gray-800 dark:text-neutral-400">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t mt-auto xl:mt-0 dark:border-neutral-700">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                data-hs-overlay="#hs-full-screen-modal-below-xl"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewModal;