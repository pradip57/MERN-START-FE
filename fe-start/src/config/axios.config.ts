import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  timeoutErrorMessage: "Server Time Out",
  headers: {
    "Content-Type": "application/json", //default header, here custom header should be used
  },
  responseType: "json",
  responseEncoding: "utf-8",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (exception) => {
    //redirect to specific page with notify with toastify
    if (+exception.status === 401) {
      toast.error("Message here");
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      window.location.href = "/login";
    } else if (+exception.status === 403) {
      toast.warning("You dont have permissions Ok");
      window.location.href = "/";
    } else {
      throw exception?.response;
    }
  }
);

export default axiosInstance;
