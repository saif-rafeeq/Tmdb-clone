import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Topnav = ({ onMenuClick }) => {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
    const { pathname } = useLocation()

    const GetSerches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetSerches();
    }, [query]);


    return (
        <div className="flex items-center pr-10">
            <div className="w-[80%] h-[10vh] relative flex mx-auto items-center">
                <div className={`${pathname !== "/"  && "max-lg:hidden"} flex items-center justify-between`}>
                    <i className="text-zinc-400 text-3xl ri-search-line"></i>
                    <input
                        onChange={(e) => setquery(e.target.value)}
                        value={query}
                        className=" text-zinc-200  p-5  text-xl outline-none border-none bg-transparent"
                        type="text"
                        placeholder="search anything"
                    />
                    {query.length > 0 && (
                        <i
                            onClick={() => setquery("")}
                            className=" text-zinc-400 cursor-pointer text-3xl ri-close-fill right-0"
                        ></i>
                    )}
                </div>

                <div className={`z-[100] absolute w-[55%] max-h-[50vh] bg-zinc-200 top-[100%] left-[0%]   overflow-auto max-md:w-[70%] min-w-[250px] `}>
                    {searches.map((s, i) => (
                        <Link
                            to={`/${s.media_type}/details/${s.id}`}
                            key={i}
                            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100"
                        >
                            <img
                                className="w-[7vmax] h-[7vmax] object-cover rounded mr-5 shadow-lg "
                                src={
                                    s.backdrop_path || s.profile_path
                                        ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path
                                        }`
                                        : noimage
                                }
                                alt=""
                            />
                            <span>
                                {s.name ||
                                    s.title ||
                                    s.original_name ||
                                    s.original_title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            {pathname === "/" && (
                <i onClick={onMenuClick} className="ri-menu-3-line -mr-5 text-zinc-400 cursor-pointer text-3xl ri-close-fill justify-self-end hidden max-lg:block"></i>)}
        </div>
    );
};

export default Topnav;
