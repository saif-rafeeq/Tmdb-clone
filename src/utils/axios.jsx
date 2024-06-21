import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        // Authorization: import.meta.env.VITE_REACT_APP_TOKEN,
        // Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTkzODU1YjM4YjgwZDEzYjZlMWNiYzg5NTcxYzJmOCIsInN1YiI6IjY2NzJhOTIzYTFkZjk4NTkwNTU1YTdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Tfmp-m-u7hFqz5vszZjVuBzfRhKGs4yx8u_ME9waG8",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTkzODU1YjM4YjgwZDEzYjZlMWNiYzg5NTcxYzJmOCIsInN1YiI6IjY2NzJhOTIzYTFkZjk4NTkwNTU1YTdlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2Tfmp-m-u7hFqz5vszZjVuBzfRhKGs4yx8u_ME9waG8'
    },
});

export default instance;
