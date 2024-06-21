import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

const Home = () => {
    document.title = "TMDB | Homepage";

    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");

    const GetHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
            setwallpaper(randomdata);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            settrending(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetTrending();
        !wallpaper && GetHeaderWallpaper();
    }, [category]);

    const [isSidenavVisible, setIsSidenavVisible] = useState(false);

    const handleMenuClick = () => {
        setIsSidenavVisible(!isSidenavVisible);
    };

    return wallpaper && trending ? (
        <>
            <Sidenav isVisible={isSidenavVisible}/>
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden bg-[#1F1E24] max-lg:w-full">
                <Topnav onMenuClick={handleMenuClick} />
                <Header data={wallpaper} />

                <div className="flex justify-between gap-2 p-5">
                    <h1 className="text-3xl font-semibold text-zinc-400 max-lg:text-xl">
                        Trending
                    </h1>

                    <Dropdown
                        title="Filter"
                        options={["tv", "movie", "all"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                </div>

                <HorizontalCards data={trending} />
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default Home;
