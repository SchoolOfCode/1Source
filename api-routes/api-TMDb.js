// import axios from "axios";
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY_TMDB;

// MOVIES APIs
// Top 10
// export const getTop10Movies = (setTop10Movies, setIsLoading) => {
//   axios.get("/movie-data/movie-data.json").then((response) => {
//     setIsLoading(false);
//     setTop10Movies(response.data.top10.slice(0, 10));
//   });
// };

// New Releases
// export const getMovieNewReleases = (setIsLoading, setMovieNewReleases) => {
//   axios.get("/movie-data/movie-data.json").then((response) => {
//     setIsLoading(false);
//     setMovieNewReleases(response.data.newReleases);
//   });
// };

// Random Movies
// export const getRandomMovies = (setIsLoading, setRandomMovies, pageNumber) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&adult='false'&p[…]ase_date.gte=1950-01-01&adult="false"&primary_release_date.lte=2022-01-01&page=${pageNumber}`
//     )
//     .then((response) => {
//       const randomMovs = response.data.results;
//       setIsLoading(false);
//       setRandomMovies(randomMovs);
//     });
// };

// GENRES
// Action
// export const getActionGenre = (setIsLoading, setActionGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&adult='false'&language=en-US&with_genres=28`
//     )
//     .then((response) => {
//       const actionResults = response.data.results;
//       setIsLoading(false);
//       setActionGenre(actionResults);
//     });
// };

// // SciFi
// export const getSciFiGenre = (setIsLoading, setSciFiGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&adult='false'&language=en-US&with_genres=878`
//     )
//     .then((response) => {
//       const scifiResults = response.data.results;
//       setIsLoading(false);
//       setSciFiGenre(scifiResults);
//     });
// };

// // Comedy
// export const getComedyGenre = (setIsLoading, setComedyGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&adult='false'&with_genres=35`
//     )
//     .then((response) => {
//       const comedyResults = response.data.results;
//       setIsLoading(false);
//       setComedyGenre(comedyResults);
//     });
// };

// // Horror
// export const getHorrorGenre = (setIsLoading, setHorrorGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
//     )
//     .then((response) => {
//       const horrorResults = response.data.results;
//       setIsLoading(false);
//       setHorrorGenre(horrorResults);
//     });
// };

// // Documentary
// export const getDocumentaryGenre = (setIsLoading, setDocumentaryGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&adult='false'&with_genres=99`
//     )
//     .then((response) => {
//       const documentaryResults = response.data.results;
//       setIsLoading(false);
//       setDocumentaryGenre(documentaryResults);
//     });
// };

// // ------------------------------

// // TV APIs
// // Top 10
// export const getTop10TV = (setIsLoading, setTop10TV) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&adult='false'&page=1`
//     )
//     .then((response) => {
//       const top10 = response.data.results;
//       setIsLoading(false);
//       setTop10TV(top10);
//     });
// };

// // New Releases
// export const getTVNewReleases = (setIsLoading, setTVNewReleases) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US&adult='false'&page=1`
//     )
//     .then((response) => {
//       const results = response;
//       console.log(`These: ${response}`);
//       setIsLoading(false);
//       setTVNewReleases(results);
//     });
// };

// // Airing Today
// export const getAiringToday = (setIsLoading, setAiringToday) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&adult='false'&with_original_language=en&language=en-UK&page=1`
//     )
//     .then((response) => {
//       const results = response.data.results;
//       setIsLoading(false);
//       setAiringToday(results);
//     });
// };

// // Random TV
// export const getRandomTV = (setIsLoading, setRandomTV, pageNumber) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&adult='false'&prim[…]e.gte=1950-01-01&primary_release_date.lte=2022-01-01&page=${pageNumber}`
//     )
//     .then((response) => {
//       const results = response.data.results;
//       setIsLoading(false);
//       setRandomTV(results);
//     });
// };

// // Genres
// // Action
// export const getTVActionGenre = (setIsLoading, setTVActionGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&adult='false'&language=en-US&with_genres=10759`
//     )
//     .then((response) => {
//       const results = response.data.results;
//       setIsLoading(false);
//       setTVActionGenre(results);
//     });
// };

// // Drama
// export const getTVDramaGenre = (setIsLoading, setTVDramaGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&adult='false'&language=en-US&with_genres=18`
//     )
//     .then((response) => {
//       const results = response.data.results;
//       setIsLoading(false);
//       setTVDramaGenre(results);
//     });
// };

// // Anime
// export const getTVAnimeGenre = (setIsLoading, setTVAnimeGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&adult='false'&with_genres=16`
//     )
//     .then((response) => {
//       const results = response.data.results;
//       setIsLoading(false);
//       setTVAnimeGenre(results);
//       console.log(results);
//     });
// };

// // SciFi
// export const getTVSciFiGenre = (setIsLoading, setTVSciFiGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&adult='false'&with_genres=10765`
//     )
//     .then((response) => {
//       const results = response.data.results;
//       setIsLoading(false);
//       setTVSciFiGenre(results);
//     });
// };

// // Crime
// export const getTVCrimeGenre = (setIsLoading, setTVCrimeGenre) => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&adult='false'&with_genres=80`
//     )
//     .then((response) => {
//       const results = response.data.results;
//       setIsLoading(false);
//       setTVCrimeGenre(results);
//     });
// };