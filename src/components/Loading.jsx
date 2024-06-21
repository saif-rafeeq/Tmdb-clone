// import loader from "/loader.gif";

const Loading = () => {
    return (
        // <div classNName="w-screen h-screen flex justify-center items-center bg-black">
        //     <img classNName="h-[50%] object-cover" src={loader} alt="" />
        // </div>
        <div className="w-full h-full flex items-center justify-center">

            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    );
};

export default Loading;
