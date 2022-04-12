import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const getGenres = async function (discover) {
   const request = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=e8036f8a3acebcd02793746dec56bd27`);
   const response = (await request).data;

   if (response) return response.genres;
};

const getMovies = async function (discover, page = 1) {
   const request = axios.get(`https://api.themoviedb.org/3/discover/${discover}?sort_by=popularity.desc&api_key=e8036f8a3acebcd02793746dec56bd27&page=${page}&append_to_response=videos&language=en-US`);
   const response = (await request).data;

   const fetchedMovies = [...response.results].filter(
      movie => movie.backdrop_path
   )

   if (response) return fetchedMovies
}

export {
   getMovies,
   getGenres
}