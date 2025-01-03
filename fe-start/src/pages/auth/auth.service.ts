import BaseHttpService from "../../config/http.config";
import { CredentialsType } from "./login/login.pages";
import { RegisterDataType } from "./register/register.pages";

class AuthService extends BaseHttpService {
  login = async (data: CredentialsType) => {
    try {
      const response = await this.postRequest("/auth/login", data);
    } catch (exception) {
      throw exception;
    }
  };

  register = async (data: RegisterDataType) => {
    try {
      const response = await this.postRequest("/auth/register", data, {
        file: true
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const authSvc = new AuthService();
export default authSvc;
// const response = await axiosInstance.post(import.meta.env.VITE_VERSION + "/auth/login", credentials); ==> when we use version
