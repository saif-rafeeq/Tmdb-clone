import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";

const People = () => {
    document.title = "TMDB | person Shows";

    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetPerson = async () => {
        try {
            const { data } = await axios.get(
                `/person/${category}?page=${page}`
            );
            if (data.results.length > 0) {
                setperson((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refershHandler = () => {
        if (person.length === 0) {
            GetPerson();
        } else {
            setpage(1);
            setperson([]);
            GetPerson();
        }
    };

    useEffect(() => {
        refershHandler();
    }, [category]);

    return person.length > 0 ? (
        <div className="w-screen h-screen ">
            <div className="flex items-center w-full justify-between  px-5">
                <h1 className=" text-2xl font-semibold text-zinc-400 max-lg:text-xl max-md:text-lg">
                    <i
                        onClick={() => navigate(-1)}
                        className="hover:text-[#6556CD] ri-arrow-left-line"
                    ></i>{" "}
                    People
                    <small className="ml-2 text-sm text-zinc-600">
                        ({category})
                    </small>
                </h1>
                <div className="w-[60%] flex items-center justify-center ">
                    <Topnav />
                </div>


            </div>

            <InfiniteScroll
                dataLength={person.length}
                next={GetPerson}
                hasMore={hasMore}
                loader={<Loading />}
            >
                <Cards data={person} title="person" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default People;
