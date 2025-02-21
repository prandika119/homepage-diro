import logoMaskot from "./../assets/Logo-Maskot-Navbar.png"; // Atur jalur sesuai struktur folder Anda
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const setIsOpen = () => {
    //     isOpen = !isOpen;
    // };
    const onClick = () => {
        console.log("clicked");
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="container-fluid fixed top-0 right-0 left-0 bg-white z-50">
                <div className="flex text-xs justify-between p-4">
                    <div className="">
                        <a href="/">
                            <img src={logoMaskot} />
                        </a>
                    </div>

                    {/* burger menu */}
                    <div>
                        <button onClick={onClick} className="block md:hidden">
                            <svg
                                className="w-8 h-8 text-blue-900"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    {/* burger menu end */}

                    <div className="hidden md:block mx-auto">
                        <ul className="flex font-medium text-xs lg:text-lg mt-4 border-b-4 md:space-x-4">
                            <li>
                                <a className="font-poppins">Home</a>
                            </li>
                            <li>
                                <a>Feature</a>
                            </li>
                            <li>
                                <a>Solutions</a>
                            </li>
                            <li>
                                <a>Pricing</a>
                            </li>
                            <li>
                                <a>Testimonial</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* button login-logout */}
                    <div className="hidden md:flex md:flex-row md:items-center md:space-x-4 lg:text-sm">
                        <button className="flex justify-center items-center h-8 w-20 bg-gradient text-center p-[2.5px] rounded-full">
                            <div className="flex justify-center items-center bg-white text-dark w-full h-full rounded-full">
                                <div className="text-transparent bg-clip-text bg-gradient">
                                    Login
                                </div>
                            </div>
                        </button>

                        <button className="bg-gradient h-8 w-20 text-white rounded-full">
                            Signup
                        </button>
                    </div>
                    {/* button login-logout end */}
                </div>

                {/* hidden menu */}
                {isOpen && (
                    <div className="flex flex-col items-center bg-primary_dark text-white rounded-b-lg md:hidden">
                        <ul className=" text-center">
                            <li className="py-2 border-b-2">
                                <a className="font-poppins">
                                    Home fakf fafafaj
                                </a>
                            </li>
                            <li className="py-2">
                                <a>Feature</a>
                            </li>
                            <li className="py-2">
                                <a>Feature 1</a>
                            </li>
                            <li className="py-2">
                                <a>Feature 2</a>
                            </li>
                        </ul>
                    </div>
                )}
                {/* hidden menu end */}
            </div>
        </>
    );
};

export default Navbar;
