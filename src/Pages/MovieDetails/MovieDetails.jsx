import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const MovieDetails = () => {
  const movieData = useLoaderData();
  const { show,_id } = movieData;
  return (
    <div className="my-16">
      <div class="hero min-h-screen bg-base-200 px-4">
        <div className="hero-content flex-col lg:flex-row">
          <LazyLoad threshold={0.70} offset={300}>
            <img
              src={show?.image.original}
              class="max-w-sm rounded-lg shadow-2xl"
            />
          </LazyLoad>

          <div>
            <h1 className="text-5xl text-blue-900 font-bold">{show?.name}</h1>
            <p className="py-6 text-xl">{show?.summary}</p>
            <Link to={`/login/booking/${_id}`}>
            <button className="btn btn-ghost text-amber-50 bg-orange-700">
              Book a Movie Ticket
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
