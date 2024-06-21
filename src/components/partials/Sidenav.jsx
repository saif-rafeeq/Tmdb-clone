import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Sidenav = ({ isVisible }) => {
    return (
        <div className={`w-[20%] h-full border-r-2 border-zinc-400 p-5 overflow-auto max-lg:p-2  ${isVisible ? 'block max-lg:absolute bg-[#1F1E24] max-lg:w-[32vmax] z-[110] max-lg:p-5' : 'block max-lg:hidden '}`}>
            <h1 className="text-2xl text-white font-bold">
                <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                <span className="text-2xl">TMDB.</span>
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">
                    New Feeds
                </h1>
                <Link
                    to="/trending"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="ri-fire-fill"></i> Trending
                </Link>
                <Link
                    to="/popular"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-bard-fill"></i>
                    Popular
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-movie-2-fill"></i>
                    Movies
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-tv-2-fill"></i>
                    Tv Shows
                </Link>
                <Link
                    to="/person"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 mb-2"
                >
                    <i className="mr-2 ri-team-fill"></i>
                    People
                </Link>
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">
                    Website Information
                </h1>
                <a href="https://www.themoviedb.org/about#:~:text=The%20Movie%20Database%20(TMDB)%20is,we're%20incredibly%20proud%20of." target="_blank" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i className="mr-2 ri-information-fill"></i> About TMDB
                </a>
                <hr className="border-none h-[1px] bg-zinc-400" />
                <span className="rounded-lg p-3">
                    <i className="mr-2 ri-phone-fill"></i>
                    Contact Us
                </span>
                <span className="w-full flex items-center justify-between p-3">
                    <a href="https://www.instagram.com/saif_rafeeq/" target="_blank">
                        <i class="ri-instagram-fill cursor-pointer text-[#6556CD] text-3xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/saif-rafeeq-399241216/" target="_blank">
                        <i class="ri-linkedin-box-fill cursor-pointer text-[#6556CD] text-3xl"></i>
                    </a>
                    <a href="https://github.com/saif-rafeeq?tab=repositories" target="_blank">
                    <i class="ri-github-fill text-[#6556CD] text-3xl cursor-pointer"></i>

                    </a>

                </span>

            </nav>
        </div>
    );
};

export default Sidenav;
