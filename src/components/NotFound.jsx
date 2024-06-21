import { Link, useNavigate } from "react-router-dom";
// import notfound from "/404.gif";

const NotFound = () => {
    return (
        // <div className="w-screen h-screen flex justify-center items-center bg-black">
        //     <img className="h-[50%] object-cover" src={notfound} alt="" />
        // </div>
        <div className="w-full h-full p-5">
            <section class="page_404">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>

                                </div>

                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        Look like you're lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <Link to={"/"} class="link_404">Go to Home</Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
