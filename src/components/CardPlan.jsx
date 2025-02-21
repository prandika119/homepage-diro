import check from "./../assets/checkbox.png";
import check_white from "./../assets/checkbox-white.png";

const CardPlan = ({ plan }) => {
    if (!plan.isBestSeller) {
        return (
            <div className="bg-white shadow-lg w-96 border rounded-3xl p-7">
                <div className="flex justify-start items-center space-x-4 m-5">
                    <img src={plan.icon} alt="" />
                    <div>
                        <p className="font-medium text-[18px]">
                            For Individuals
                        </p>
                        <h3 className="font-bold text-[24px]">
                            {plan.category}
                        </h3>
                    </div>
                </div>

                <div>
                    <p className="font-normal text-[18px] mb-5">
                        {plan.description}
                    </p>
                </div>

                <div>
                    <p className="font-bold text-5xl">
                        {plan.price}{" "}
                        <span className="font-medium text-xl">/Month</span>
                    </p>
                </div>

                <div className="text-start mt-5">
                    <p className="font-bold text-xl">What's included</p>
                    {plan.offers.map((desc, index) => (
                        <div
                            key={index}
                            className="flex justify-start items-center mt-4"
                        >
                            <img src={check} alt="checkbox" className="mr-2" />
                            <p className="text-dark">{desc}</p>
                        </div>
                    ))}
                </div>
                {/* <p>{plan.offers}</p> */}
            </div>
        );
    } else {
        return (
            <div className="bg-gradient text-white shadow-lg w-96 border rounded-3xl p-7">
                <div className="flex relative justify-start items-center space-x-4 m-5">
                    <div className="bg-white rounded-lg p-1 absolute -right-5 -top-8">
                        <p className="font-medium text-sm text-transparent bg-clip-text bg-gradient">
                            Best Seller
                        </p>
                    </div>

                    <img src={plan.icon} alt="" />
                    <div>
                        <p className="font-medium text-[18px]">
                            For Individuals
                        </p>
                        <h3 className="font-bold text-[24px]">
                            {plan.category}
                        </h3>
                    </div>
                </div>

                <div>
                    <p className="font-normal text-[18px] mb-5">
                        {plan.description}
                    </p>
                </div>

                <div>
                    <p className="font-bold text-5xl">
                        {plan.price}{" "}
                        <span className="font-medium text-xl">/Month</span>
                    </p>
                </div>

                <div className="text-start mt-5">
                    <p className="font-bold text-xl">What's included</p>
                    {plan.offers.map((desc, index) => (
                        <div
                            key={index}
                            className="flex justify-start items-center mt-4"
                        >
                            <img
                                src={check_white}
                                alt="checkbox"
                                className="mr-2"
                            />
                            <p className="text-dark">{desc}</p>
                        </div>
                    ))}
                </div>
                {/* <p>{plan.offers}</p> */}
            </div>
        );
    }
};

export default CardPlan;
