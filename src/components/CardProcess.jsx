const CardProcess = ({ card }) => {
    return (
        <div className="bg-white w-40 rounded-tl-3xl rounded-r-3xl p-5 m-3 p-5">
            <div className="flex flex-col justify-center items-center">
                <img src={card.icon} alt="" />
                <h1 className="font-bold">{card.title}</h1>
                <p className="text-center text-sm">{card.description}</p>
            </div>
        </div>
    );
};

export default CardProcess;
