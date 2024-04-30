const FAQ = () => {
    return (
        <div className="max-w-[60rem] mx-auto space-y-4 my-24">
            <h1 className="text-2xl font-bold text-center my-12">Frequently Asked Question</h1>
            <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="craftify-accordion" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    How do I place an order on CraftifyBD?
                </div>
                <div className="collapse-content">
                    <p>Ordering on CraftifyBD is simple! Just browse through our collection of craft items, select the ones you love, add them to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment details, and voila! Your order will be on its way to you soon.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="craftify-accordion" />
                <div className="collapse-title text-xl font-medium">
                    What payment methods do you accept on CraftifyBD?
                </div>
                <div className="collapse-content">
                    <p>We accept a variety of payment methods to make your shopping experience convenient. You can pay for your order on CraftifyBD using major credit cards, debit cards, PayPal, and other secure payment gateways. Rest assured that your payment information is encrypted and protected.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="craftify-accordion" />
                <div className="collapse-title text-xl font-medium">
                    How long will it take for my order to arrive?
                </div>
                <div className="collapse-content">
                    <p>We understand you're excited to receive your craft items! Delivery times vary depending on your location and the shipping method selected at checkout. Typically, orders are processed within 1-3 business days, and shipping times range from 3-7 days for domestic orders and 7-14 days for international orders. You can track your order using the provided tracking number once it's shipped.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="craftify-accordion" />
                <div className="collapse-title text-xl font-medium">
                    What if I receive a damaged or incorrect item?
                </div>
                <div className="collapse-content">
                    <p>Your satisfaction is our top priority at CraftifyBD. In the unlikely event that you receive a damaged or incorrect item, please contact our customer support team immediately. We'll work swiftly to resolve the issue by offering a replacement or issuing a refund, whichever you prefer. Your happiness with your purchase is paramount to us.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="craftify-accordion" />
                <div className="collapse-title text-xl font-medium">
                    Can I return or exchange items if I change my mind?
                </div>
                <div className="collapse-content">
                    <p>Of course! We want you to be thrilled with your CraftifyBD purchase. If for any reason you're not completely satisfied with your order, you can return or exchange eligible items within 30 days of receipt. Simply contact our customer support team to initiate the return process, and we'll guide you through the steps to ensure a smooth experience. Please note that certain items, such as custom-made or personalized crafts, may not be eligible for return or exchange.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="craftify-accordion" />
                <div className="collapse-title text-xl font-medium">
                    Do you offer international shipping?
                </div>
                <div className="collapse-content">
                    <p>Yes, we do! CraftifyBD is delighted to offer international shipping to craft enthusiasts around the globe. Whether you're located in Bangladesh or halfway across the world, you can enjoy our curated selection of crafts delivered right to your doorstep. Simply select your country during checkout, and we'll take care of the rest.</p>
                </div>
            </div>

            {/* End FAQ */}
        </div>

    );
};

export default FAQ;