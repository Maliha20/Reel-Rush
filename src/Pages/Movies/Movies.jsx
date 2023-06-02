import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Movies = () => {

    const [movies, setMovies] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allmovies")
        .then(res=> res.json())
        .then(data=>{
            setMovies(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold text-blue-900 text-center my-10'>Now Airing</h2>
            <div className="grid grid-col md:grid-cols-3  justify-center gap-4"  data-aos="fade-down">
            {
              movies.map(movie=> 
              <Movie key={movie._id} movie={movie}></Movie>
              )   
            }
            </div>

        </div>
    );
};

export default Movies;