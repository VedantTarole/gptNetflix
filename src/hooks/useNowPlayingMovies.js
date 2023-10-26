import { useDispatch } from "react-redux";
import { options } from "../utils/urls";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    // const data = await fetch(
    //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    //   options
    // );
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODk4YzkwM2ViMzY3YzBiOTk0NDcxMTFhMTViZTMwZSIsInN1YiI6IjY1Mzk4MDRhMjgxMWExMDEyYzk4YjNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w87ZvWSYclUBQm-JFgnAcqK3LI6Bvh24y-OUu3mVZeA",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(addNowPlayingMovies(response.results));
      })
      .catch((err) => console.error(err));
    // const json = data.json();
    // dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
