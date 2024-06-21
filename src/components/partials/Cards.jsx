import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Cards = ({ data, title }) => {
    return (
        <div className="w-full h-full bg-[#1F1E24] overflow-x-hidden">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5 gap-2 bg-[#1F1E24] p-2">
                <Link
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                    className="fixed z-[50] bottom-[5%] right-[5%] flex justify-center items-center w-[5vh] h-[5vh] bg-[#6556cd] rounded-lg "
                >
                    <i className="text-white ri-arrow-up-line text-xl"></i>
                </Link>
                {data.map((c, i) => (
                    <Link
                        to={`/${c.media_type || title}/details/${c.id}`}
                        className="relative"
                        key={i}
                    >
                        <img
                            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-full h-[40vh] object-cover"
                            src={
                                c.poster_path || c.backdrop_path || c.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${c.poster_path ||
                                    c.backdrop_path ||
                                    c.profile_path
                                    }`
                                    : noimage
                            }
                            alt=""
                        />
                        <h1 className="text-xl text-zinc-300 mt-3 font-semibold ">
                            {c.name ||
                                c.title ||
                                c.original_name ||
                                c.original_title}
                        </h1>

                        {c.vote_average && (
                            <div className="absolute -right-[-2%] bottom-[15%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[8vh] h-[8vh] flex justify-center items-center">
                                {(c.vote_average * 10).toFixed()} <sup>%</sup>
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Cards;
