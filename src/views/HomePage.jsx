import imageLogo from "./../assets/hero-section.png";
import playLogo from "./../assets/Button-Play.png";

import pattern1 from "./../assets/Pattern-r.png";
import pattern2 from "./../assets/Pattern-l.png";
import manImage from "./../assets/man.png";
import StruggleBox from "./../components/StruggleBox";
import CardFeature from "../components/CardFeature";

import step1 from "./../assets/step-1.png";
import CardProcess from "../components/CardProcess";
import arc1 from "./../assets/Arc2.png";
import arc2 from "./../assets/Arc 5.png";
import CardPlan from "../components/CardPlan";

import basic from "./../assets/basic.png";

import gopay from "./../assets/Gopay.png";
import akulaku from "./../assets/Akulaku.png";
import alfamart from "./../assets/Alfamart.png";
import american from "./../assets/american-express.png";
import bca from "./../assets/BCA.png";
import bri from "./../assets/BRI.png";
import indomaret from "./../assets/Indomaret.png";
import kredivo from "./../assets/kredivo.png";
import mandiri from "./../assets/Mandiri.png";
import mastercard from "./../assets/mastercard.png";
import visa from "./../assets/path3789.png";
import qris from "./../assets/QRIS.svg";
import shophee from "./../assets/Shopee Pay.png";
import jcb from "./../assets/Vector.png";

import woman from "./../assets/woman.png";
import patter2r from "./../assets/pattern2-r.png";
import patter2l from "./../assets/pattern2-l.png";

const HomePage = () => {
    return (
        <>
            <section id="herosection" className="container mx-auto">
                <div className="mt-10 lg:mt-20">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl text-center">
                        Diro: Digital Intelligence
                        <p>Reservation Oracle</p>
                    </h1>
                </div>

                <div className="flex justify-center itema-center my-9 mx-3">
                    <img src={imageLogo} alt="" />
                </div>

                <div className="flex justify-center itema-center text-center">
                    <p className="text-xs mx-3 md:text-xl font-medium">
                        Revolutionizing Indonesia’s businesses with AI-powered
                        reservations—bringing efficiency, automation, and
                        seamless experiences to drive growth and streamline
                        operations effortlessly.
                    </p>
                </div>

                <div className="flex justify-center items-center mt-9 mb-24 space-x-2 lg:space-x-7">
                    <button className="bg-gradient text-white text-md px-8 py-4 font-semibold rounded-lg shadow-xl lg:text-2xl lg:px-14 lg:py-7">
                        Start Free Trial
                    </button>

                    <button className="flex justify-center items-center bg-primary_dark bg-opacity-20 text-dark text-md px-8 py-4 font-semibold rounded-lg lg:text-2xl lg:px-14 lg:py-7">
                        <img
                            className="w-6 mr-2 lg:w-8"
                            src={playLogo}
                            alt=""
                        />
                        <span>Request Demo</span>
                    </button>
                </div>
            </section>

            <section
                id="struggler-section"
                className="container-fluid bg-gradient"
            >
                <img src={pattern1} className="absolute right-0" alt="" />
                <img src={pattern2} className="absolute -left-56" alt="" />
                <div className="">
                    <h1 className="text-white text-center font-bold text-2xl pt-12 lg:text-5xl">
                        We’ve Listened and Understood Your Struggles
                    </h1>
                    <p className="text-white text-center mx-20 mt-4">
                        After years of research, we’ve crafted the ultimate
                        solution to your business reservation challenges
                    </p>
                </div>

                <div className="flex">
                    <div className="flex flex-wrap space-x-5 space-y-5 justify-center items-center mt-10 mb-10 lg:mb-0 lg:mt-20 lg:relative lg:mx-auto">
                        <img
                            className="absolute md:w-1/4 lg:static w-1/3 lg:w-96"
                            src={manImage}
                            alt=""
                        />

                        <StruggleBox
                            struggle={{
                                title: "Lack of Membership & Loyalty Tracking",
                                description:
                                    "Regular customers have no way to track their usage, balances, or earn rewards, making retention harder.",
                            }}
                            position={"-top-20 left-20"}
                        />
                        <StruggleBox
                            struggle={{
                                title: "Lack of Membership & Loyalty Tracking",
                                description:
                                    "Regular customers have no way to track their usage, balances, or earn rewards, making retention harder.",
                            }}
                            position={"top-28 -right-40"}
                        />
                        <StruggleBox
                            struggle={{
                                title: "Lack of Membership & Loyalty Tracking",
                                description:
                                    "Regular customers have no way to track their usage, balances, or earn rewards, making retention harder.",
                            }}
                            position={"top-28 -left-40"}
                        />
                        <StruggleBox
                            struggle={{
                                title: "Lack of Membership & Loyalty Tracking",
                                description:
                                    "Regular customers have no way to track their usage, balances, or earn rewards, making retention harder.",
                            }}
                            position={"bottom-10 -right-60"}
                        />
                        <StruggleBox
                            struggle={{
                                title: "Lack of Membership & Loyalty Tracking",
                                description:
                                    "Regular customers have no way to track their usage, balances, or earn rewards, making retention harder.",
                            }}
                            position={"bottom-10 -left-60"}
                        />
                    </div>
                </div>
                {/* StruggleBox */}
            </section>

            <section
                id="feature-section"
                className="container z-20 text-center mx-auto"
            >
                <div className="mt-10 lg:mt-20 font-bold text-5xl">
                    <h1 className="">
                        DIRO's
                        <span className="text-transparent bg-clip-text bg-gradient">
                            Powerful Features
                        </span>
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center items-center mt-10 mb-10 lg:mb-0 lg:mt-20">
                    <CardFeature
                        feature={{
                            image: playLogo,
                            title: "Automated & Real-Time Booking System",
                            description: [
                                "Prevents double booking and scheduling conflicts",
                                "Customers can book, reschedule, or cancel easily",
                                "Availability updates instantly across all platforms",
                            ],
                        }}
                    />
                    <CardFeature
                        feature={{
                            image: playLogo,
                            title: "Automated & Real-Time Booking System",
                            description: [
                                "Prevents double booking and scheduling conflicts",
                                "Customers can book, reschedule, or cancel easily",
                                "Availability updates instantly across all platforms",
                            ],
                        }}
                    />
                    <CardFeature
                        feature={{
                            image: playLogo,
                            title: "Automated & Real-Time Booking System",
                            description: [
                                "Prevents double booking and scheduling conflicts",
                                "Customers can book, reschedule, or cancel easily",
                                "Availability updates instantly across all platforms",
                            ],
                        }}
                    />
                    <CardFeature
                        feature={{
                            image: playLogo,
                            title: "Automated & Real-Time Booking System",
                            description: [
                                "Prevents double booking and scheduling conflicts",
                                "Customers can book, reschedule, or cancel easily",
                                "Availability updates instantly across all platforms",
                            ],
                        }}
                    />
                    <CardFeature
                        feature={{
                            image: playLogo,
                            title: "Automated & Real-Time Booking System",
                            description: [
                                "Prevents double booking and scheduling conflicts",
                                "Customers can book, reschedule, or cancel easily",
                                "Availability updates instantly across all platforms",
                            ],
                        }}
                    />
                    <CardFeature
                        feature={{
                            image: playLogo,
                            title: "Automated & Real-Time Booking System",
                            description: [
                                "Prevents double booking and scheduling conflicts",
                                "Customers can book, reschedule, or cancel easily",
                                "Availability updates instantly across all platforms",
                            ],
                        }}
                    />
                </div>
            </section>

            <section id="we-feel-you" className="container mx-auto mt-20">
                <div>
                    <h1 className="font-bold text-3xl lg:text-5xl text-center">
                        We Feel You, So We Built This!
                    </h1>
                </div>

                <div className="flex justify-center flex-wrap mt-10">
                    <div className="flex flex-col md:w-[400px] lg:w-[600px]">
                        <p className="font-medium w-full text-lg text-justify">
                            DIRO streamlines reservations for Indonesian
                            businesses through an AI-powered platform that
                            automates scheduling and management. Our integrated
                            system helps companies save time and minimize
                            errors. With DIRO, businesses can focus on growth
                            while our smart system handles scheduling
                            complexities.
                        </p>
                        <div className="flex justify-center items-center mt-7 space-x-3">
                            <button className="bg-gradient text-white text-sm px-3 py-4 font-semibold rounded-lg shadow-xl lg:text-2xl lg:px-6 lg:py-7">
                                Learn More
                            </button>
                            <button className="bg-primary_dark bg-opacity-20 text-dark text-md px-3 py-4 font-semibold rounded-lg lg:text-2xl lg:px-6 lg:py-7">
                                Start Your Free Trial
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center bg-slate-300 m-6 w-full h-60 lg:w-[596px] lg:h-96">
                        <img src={playLogo} alt="" />
                    </div>
                </div>
            </section>

            <section
                id="process-reservation"
                className="container-fluid bg-gradient my-20 py-10 px-10"
            >
                <div>
                    <h1 className="text-white font-bold text-3xl lg:text-5xl text-center">
                        Your New Reservation Process
                    </h1>
                    <div className="flex flex-col space-y-20 lg:space-y-0 lg:flex-row justify-center items-center mt-5">
                        <CardProcess
                            card={{
                                icon: step1,
                                title: "STEP 1",
                                description:
                                    "Easily Customized Your Reservation",
                            }}
                        />
                        <img
                            className="rotate-90 lg:rotate-0"
                            src={arc1}
                            alt=""
                        />
                        <CardProcess
                            card={{
                                icon: step1,
                                title: "STEP 1",
                                description:
                                    "Easily Customized Your Reservation",
                            }}
                        />
                        <img
                            className="rotate-90 lg:rotate-0"
                            src={arc2}
                            alt=""
                        />
                        <CardProcess
                            card={{
                                icon: step1,
                                title: "STEP 1",
                                description:
                                    "Easily Customized Your Reservation",
                            }}
                        />
                        <img
                            className="rotate-90 lg:rotate-0"
                            src={arc1}
                            alt=""
                        />
                        <CardProcess
                            card={{
                                icon: step1,
                                title: "STEP 1",
                                description:
                                    "Easily Customized Your Reservation",
                            }}
                        />
                    </div>
                </div>
            </section>

            <section id="plans" className="container mx-auto">
                <div>
                    <h1 className="font-bold text-5xl text-center">
                        Flexible Plans to Fit Your Needs
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center items-center space-x-10 m-12">
                    <CardPlan
                        plan={{
                            category: "basic",
                            description:
                                "Small businesses that are just starting to implement an automated booking system. Ideal for  businesses with fewer bookings and staff",
                            price: "Rp 229K",
                            offers: [
                                "Smart Scheduling with customizable options",
                                "Basic Analytics Dashboard",
                                "Calendar and Price Settings Management",
                                "Offline Booking Sync",
                            ],
                            icon: basic,
                            isBestSeller: false,
                        }}
                    />
                    <CardPlan
                        plan={{
                            category: "basic",
                            description:
                                "Small businesses that are just starting to implement an automated booking system. Ideal for  businesses with fewer bookings and staff",
                            price: "Rp 229K",
                            offers: [
                                "Smart Scheduling with customizable options",
                                "Basic Analytics Dashboard",
                                "Calendar and Price Settings Management",
                                "Offline Booking Sync",
                            ],
                            icon: basic,
                            isBestSeller: true,
                        }}
                    />
                    <CardPlan
                        plan={{
                            category: "basic",
                            description:
                                "Small businesses that are just starting to implement an automated booking system. Ideal for  businesses with fewer bookings and staff",
                            price: "Rp 229K",
                            offers: [
                                "Smart Scheduling with customizable options",
                                "Basic Analytics Dashboard",
                                "Calendar and Price Settings Management",
                                "Offline Booking Sync",
                            ],
                            icon: basic,
                            isBestSeller: false,
                        }}
                    />
                </div>
            </section>

            <section className="mb-24">
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
                    <span className="text-transparent bg-clip-text bg-gradient">
                        Seamless
                    </span>{" "}
                    <span className="text-dark">Integrations</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center mb-8">
                    <img src={gopay} alt="GoPay" className="h-8 w-auto" />
                    <img src={shophee} alt="ShopeePay" className="h-8 w-auto" />
                    <img src={qris} alt="qRIS" className="h-8 w-auto" />
                    <img src={visa} alt="Visa" className="h-8 w-auto" />
                    <img
                        src={mastercard}
                        alt="Mastercard"
                        className="h-8 w-auto"
                    />
                    <img src={jcb} alt="JCB" className="h-8 w-auto" />
                    <img
                        src={american}
                        alt="American Express"
                        className="h-8 w-auto"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
                    <img src={bca} alt="BCA KlikPay" className="h-8 w-auto" />
                    <img src={bri} alt="BRI" className="h-8 w-auto" />
                    <img src={mandiri} alt="Mandiri" className="h-8 w-auto" />
                    <img src={alfamart} alt="Alfamart" className="h-8 w-auto" />
                    <img
                        src={indomaret}
                        alt="Indomaret"
                        className="h-8 w-auto"
                    />
                    <img
                        src={akulaku}
                        alt="Akulaku PayLater"
                        className="h-8 w-auto"
                    />
                    <img src={kredivo} alt="Kredivo" className="h-8 w-auto" />
                </div>
            </section>

            <section className="flex justify-center items-center bg-gradient text-white px-16">
                <img className="absolute right-0 w-1/3" src={patter2r} alt="" />
                <img className="absolute left-0 w-1/3" src={patter2l} alt="" />
                <div className="z-10 hidden lg:block">
                    <img className="object-cover" src={woman} alt="" />
                </div>
                <div className="container mx-auto px-4 py-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Have a Question?
                    </h2>
                    <p className="mb-8 max-w-2xl mx-auto">
                        We're ready to help your business grow with an easy and
                        efficient reservation system. Our support team is
                        available 24/7 with English and Bahasa Indonesia
                        support.
                    </p>
                    <button className="bg-white text-blue-500 px-8 py-4 font-semibold rounded-lg shadow-xl">
                        Contact Us Now
                    </button>
                </div>
            </section>
        </>
    );
};

export default HomePage;
