import logo from "./../assets/Logo-Maskot-Navbar.png";

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="DIRO Logo"
                            className="h-12 w-auto"
                        />
                    </a>
                    <p className="text-sm text-muted-foreground">
                        Revolutionizing Indonesia's businesses with AI-powered
                        reservations—bringing efficiency, automation, and
                        seamless experiences to drive growth and streamline
                        operations effortlessly
                    </p>
                </div>

                {/* Features Column */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Features</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Smart Scheduling
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Pricing & Vouchers
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Payment Integrations
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Customer & Staff Management
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Multi-Store Managements
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Offline Booking Sync
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Business Solution Column */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Business Solution</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Rental Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Professional Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Barbershop & Beauty Salon
                            </a>
                        </li>
                    </ul>

                    <h3 className="font-semibold text-lg pt-4">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Our Story
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Mission & Values
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Career
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Download Apps Column */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <a href="#" className="block">
                            <img
                                src="/placeholder.svg"
                                alt="Get it on Google Play"
                                className="h-auto w-36"
                            />
                        </a>
                        <a href="#" className="block">
                            <img
                                src="/placeholder.svg"
                                alt="Download on the App Store"
                                className="h-auto w-36"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t">
                <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <select className="text-sm bg-transparent border-none focus:ring-0">
                            <option>Indonesian</option>
                            <option>English</option>
                        </select>
                        <nav className="flex gap-4">
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Kebijakan Privasi
                            </a>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Syarat dan Ketentuan
                            </a>
                            <a
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Pengaturan Cookie
                            </a>
                        </nav>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary"
                        >
                            {/* <Facebook className="h-5 w-5" /> */}
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary"
                        >
                            {/* <Instagram className="h-5 w-5" /> */}
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary"
                        >
                            {/* <Youtube className="h-5 w-5" /> */}
                            <span className="sr-only">Youtube</span>
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary"
                        >
                            {/* <Linkedin className="h-5 w-5" /> */}
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
