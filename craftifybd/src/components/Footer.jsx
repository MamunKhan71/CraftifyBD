const Footer = () => {
    return (
        <footer className="mt-24 footer p-10 bg-base-200 text-base-content rounded-2xl">
            <aside className="flex flex-col lg:flex-row items-center">
                <img src="/images/favicon.png"></img>
                <div>
                    <h1 className="text-2xl font-bold">CraftifyBD.com</h1>
                    <p>Empowering craft enthusiasts<br/> since 2020</p>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a href="#" className="link link-hover">Craft Workshops</a>
                <a href="#" className="link link-hover">Craft Supplies Consultation</a>
                <a href="#" className="link link-hover">Custom Craft Creations</a>
                <a href="#" className="link link-hover">Craft Marketing Assistance</a>
                <a href="#" className="link link-hover">Craft Business Development</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a href="#" className="link link-hover">About CraftifyBD</a>
                <a href="#" className="link link-hover">Meet Our Craft Experts</a>
                <a href="#" className="link link-hover">Craft Supplies Review</a>
                <a href="#" className="link link-hover">Craft Inspiration Blogs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a href="#" className="link link-hover">Accessibility Statement</a>
                <a href="#" className="link link-hover">Returns & Exchange Policy</a>
                <a href="#" className="link link-hover">Refund Policy</a>
                <a href="#" className="link link-hover">Hiring Statistics</a>
            </nav>
        </footer>


    );
};

export default Footer;