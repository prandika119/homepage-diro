import badIcon from "./../assets/bad.png";
const StruggleBox = ({ struggle, position }) => {
    return (
        <div className={`struggle-box lg:absolute ${position} w-52`}>
            <div className="relative flex flex-col justify-center items-center bg-white p-4 rounded-lg shadow-lg">
                <h2 className="font-bold text-center text-sm">
                    {struggle.title}
                </h2>
                <hr className="w-10 my-2 border-1 border-black" />
                <p className="font-normal text-center text-xs">
                    {struggle.description}
                </p>
                <img className="absolute -left-5 -top-5" src={badIcon} alt="" />
            </div>
        </div>
    );
};

export default StruggleBox;
