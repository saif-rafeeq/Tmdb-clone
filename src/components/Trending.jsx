import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
    document.title = "TMDB | Trending";
    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(
                `/trending/${category}/${duration}?page=${page}`
            );

            if (data.results.length > 0) {
                settrending((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refershHandler = () => {
        if (trending.length === 0) {
            GetTrending();
        } else {
            setpage(1);
            settrending([]);
            GetTrending();
        }
    };

    useEffect(() => {
        refershHandler();
    }, [category, duration]);

    return trending.length > 0 ? (
        <div className="w-screen min-h-screen bg-[#1F1E24] ">
                <div className="flex items-center w-full justify-between px-5">
                    <h1 className=" text-2xl font-semibold text-zinc-400 max-lg:text-xl max-md:text-lg">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6556CD] ri-arrow-left-line"
                        ></i>{" "}
                        Trending
                        <small className="ml-2 text-sm text-zinc-600">
                            ({category})
                        </small>
                    </h1>
                    <Topnav />
                    <Dropdown
                        title="Category"
                        options={["movie", "tv", "all"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                    <Dropdown
                        title="Duration"
                        options={["week", "day"]}
                        func={(e) => setduration(e.target.value)}
                    />
                </div>
           

            <InfiniteScroll
                dataLength={trending.length}
                next={GetTrending}
                hasMore={hasMore}
                loader={<Loading />}>
                <Cards data={trending} title={category} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Trending;
