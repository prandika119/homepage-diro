import imageLogo from "./../assets/hero-section.png";
import playLogo from "./../assets/Button-Play.png";
const HeroSection = () => {
    return (
        <>
            <div className="container mx-auto">
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
            </div>
        </>
    );
};

export default HeroSection;
