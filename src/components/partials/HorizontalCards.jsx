import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data, title }) => {
    // console.log(data)
    return (
        <div className="w-[100%] flex overflow-y-hidden mb-5 p-5 ">
            {data.length > 0 ? (
                data.map((d, i) => (
                    <Link
                        to={`/${d.media_type || title}/details/${d.id}`}
                        key={i}
                        className="min-w-[200px] h-[45vh] overflow-hidden rounded  bg-zinc-900 mr-5 mb-5 hover:scale-105 duration-300"
                    >
                        <img
                            className="w-full h-[60%] object-cover"
                            src={
                                d.backdrop_path || d.poster_path
                                    ? `https://image.tmdb.org/t/p/original${
                                          d.backdrop_path || d.poster_path
                                      }`
                                    : noimage
                            }
                            alt=""
                        />
                        <div className="text-white p-3 h-[45%] overflow-y-auto">
                            <h1 className=" text-xl font-semibold ">
                                {d.name ||
                                    d.title ||
                                    d.original_name ||
                                    d.original_title}
                            </h1>
                            <hr className="border-none h-[1px] bg-zinc-400 w-[70%] my-2" />
                            <p className="">
                                {d.overview.slice(0, 50)}...
                                <span className="text-zinc-500"> more</span>
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <h1 className="text-3xl mt-5 text-white font-black text-center">
                    Nothing to show
                </h1>
            )}
        </div>
    );
};

export default HorizontalCards;
