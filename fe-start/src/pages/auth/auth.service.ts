import BaseHttpService from "../../config/http.config";
import { CredentialsType } from "./login/login.pages";
import { RegisterDataType } from "./register/register.pages";

class AuthService extends BaseHttpService {
  login = async (data: CredentialsType) => {
    try {
      const { data: response } = await this.postRequest("/auth/login", data); //data destruct from response

      localStorage.setItem("accesstoken", response.result.token.accessToken);
      localStorage.setItem("refreshtoken", response.result.token.refreshToken);

      return response;
    } catch (exception) {
      throw exception;
    }
  };

  register = async (data: RegisterDataType) => {
    try {
      const response = await this.postRequest("/auth/register", data, {
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  activateUser = async (token: string) => {
    try {
      const response = await this.getRequest("/auth/activate/" + token);
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  resendActivationToken = async (token: string) => {
    try {
      const response = await this.getRequest(
        "/auth/re-send/activation/" + token
      );
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  getLoggedInUser = async () => {
    try {
      const response = await this.getRequest("/auth/me", { auth: true });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const authSvc = new AuthService();
export default authSvc;
// const response = await axiosInstance.post(import.meta.env.VITE_VERSION + "/auth/login", credentials); ==> when we use version
