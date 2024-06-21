import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";

const Movie = () => {
    document.title = "TMDB | Movies";

    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);
            if (data.results.length > 0) {
                setmovie((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const refershHandler = () => {
        if (movie.length === 0) {
            GetMovie();
        } else {
            setpage(1);
            setmovie([]);
            GetMovie();
        }
    };

    useEffect(() => {
        refershHandler();
    }, [category]);

    return movie.length > 0 ? (
        <div className="w-screen h-screen ">
            <div className=" flex items-center w-full justify-between px-5 ">               
                    <h1 className=" text-2xl font-semibold text-zinc-400 max-lg:text-xl max-md:text-lg">
                        <i
                            onClick={() => navigate(-1)}
                            className="hover:text-[#6556CD] ri-arrow-left-line"
                        ></i>{" "}
                        Movie
                        <small className="ml-2 text-sm text-zinc-600">
                            ({category})
                        </small>
                    </h1>
                    <Topnav />
                    <Dropdown
                        title="Category"
                        options={[
                            "popular",
                            "top_rated",
                            "upcoming",
                            "now_playing",
                        ]}
                        func={(e) => setcategory(e.target.value)}
                    />
                    <div className="w-[2%]"></div>
               
            </div>

            <InfiniteScroll
                dataLength={movie.length}
                next={GetMovie}
                hasMore={hasMore}
                loader={<Loading />}
            >
                <Cards data={movie} title="movie" />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default Movie;
