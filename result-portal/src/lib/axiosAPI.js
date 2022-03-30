import axios from "axios";

const debug = false;
// const baseURL = debug ?  'https://api2.mathmaterate.com/':"http://localhost:8080/"
const baseURL = debug
  ? "http://localhost:8080/"
  : "https://api2.mathmaterate.com/";
//const baseURL = debug ? "http://localhost:8000/" : 'http://materate-math-a-hack-results.ap-south-1.elasticbeanstalk.com/'

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 50000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "MTRT " + localStorage.getItem("access_token")
      : "",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("error at interceptor: ", error);
    console.log("refresh_token: ", localStorage.getItem("refresh_token"));
    console.log("access_token: ", localStorage.getItem("access_token"));
    console.log(error.response);
    const originalRequest = error.config;

    // Prevent infinite loops
    if (
      error.response &&
      error.response.status === 401 &&
      originalRequest.url === baseURL + "token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.code === "token_not_valid" &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);

              axiosInstance.defaults.headers["Authorization"] =
                "MTRT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "MTRT " + response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login/";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/login/";
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export { axiosInstance };
