import check from "./../assets/checkbox.png";
import arrow from "./../assets/ArrowRight.png";
const CardFeature = ({ feature }) => {
    return (
        <div>
            <div className="bg-gradient p-[2.5px] rounded-2xl w-64 lg:w-96 m-3">
                <div className="flex flex-col items-center bg-white rounded-2xl px-3 py-4 lg:px-7 lg:py-10">
                    <img className="w-8 md:w-auto" src={feature.image} alt="" />
                    <h1 className="text-dark font-semibold text-md lg:text-2xl mt-7">
                        {feature.title}
                    </h1>
                    <div className="text-dark text-center font-normal text-xs lg:text-sm mt-4">
                        {feature.description.map((desc, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center mt-4"
                            >
                                <img
                                    src={check}
                                    alt="checkbox"
                                    className="mr-2 w-5"
                                />
                                <p className="text-dark text-center">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-1 lg:mt-7">
                        <button className="text-primary_dark text-md mr-3 py-7 font-semibold text-lg">
                            Learn More
                        </button>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFeature;
