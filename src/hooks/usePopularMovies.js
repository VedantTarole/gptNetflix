import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODk4YzkwM2ViMzY3YzBiOTk0NDcxMTFhMTViZTMwZSIsInN1YiI6IjY1Mzk4MDRhMjgxMWExMDEyYzk4YjNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w87ZvWSYclUBQm-JFgnAcqK3LI6Bvh24y-OUu3mVZeA",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addPopularMovies(response.results)))
      .catch((err) => console.error(err));
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?page=1",
    //   API_OPTIONS
    // );
    // const json = await data.json();
    // dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
