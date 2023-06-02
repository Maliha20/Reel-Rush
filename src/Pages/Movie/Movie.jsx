import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Movie = ({ movie }) => {
  const { show, _id } = movie;
  return (
    <div className="my-12 p-3 shadow-2xl card md:w-96 border-4 border-blue-900">
      <figure>
        {show && show.image && (
          <LazyLoad threshold={0.7}>
            <img
              className="rounded-xl shadow-lg"
              src={show.image.medium}
              alt=""
            />
          </LazyLoad>
        )}
      </figure>
      <hr className="my-2 rounded-sm border-t-2 border-blue-900 text-blue-900" />
      <div className="card-body">
        <h2 className="card-title text-blue-900 text-xl font-semibold">
          Name: {show?.name}
        </h2>
        <p className="text-blue-900 text-lg font-semibold">
          Genre:
          {show?.genres.map((genre) => (
            <>
              {" "}
              <li>{genre}</li>
            </>
          ))}
        </p>
        <p className="text-blue-900 text-lg font-semibold">
          Language: {show?.language}
        </p>
        <p className="text-blue-900 text-lg font-semibold">
          Premiered: {show?.premiered}
        </p>
        <p className="text-blue-900 text-lg font-semibold">
          Available on:{" "}
          {show?.officialSite ? show?.officialSite : "Not Available"}
        </p>
        <div className="card-actions justify-start">
          <Link to={`/login/movie/${_id}`}>
            <button className="bg-yellow-500 text-blue-500 btn btn-ghost btn-xs">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
