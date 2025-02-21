import pattern1 from "./../assets/Pattern-r.png";
import pattern2 from "./../assets/Pattern-l.png";
import manImage from "./../assets/man.png";
import StruggleBox from "./StruggleBox";
const StruggleSection = () => {
    return (
        <>
            <div className="container-fluid bg-gradient">
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
            </div>
        </>
    );
};

export default StruggleSection;
