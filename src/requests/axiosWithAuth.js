import axios from "axios";

const axiosWithAuth = () => {
    const token = JSON.parse(window.localStorage.getItem("token"))

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://anywhere-fitness-build-week.herokuapp.com",
  });
};
export default axiosWithAuth;