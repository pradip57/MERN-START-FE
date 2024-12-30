import axiosInstance from "./axios.config";

abstract class BaseHttpService {
  postRequest = async (url: string, data: any = {}) => {
    try {
      const response = await axiosInstance.post(url, data);
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  getRequest = () => {};
  putRequest = () => {};
  patchRequest = () => {};
  deleteRequest = () => {};
}

export default BaseHttpService;
