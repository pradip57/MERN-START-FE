import BaseHttpService, { PaginationProps } from "../../config/http.config";

class AdminBannerService extends BaseHttpService {
  createBanner = async (data: any) => {
    try {
      const response = await this.postRequest("/banner", data, {
        auth: true,
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  listAll = async ({ page, limit, search }: PaginationProps) => {
    try {
      const response = this.getRequest("/banner", {
        auth: true,
        params: { page, limit, search },
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  deleteBanner = async (id: string) => {
    try {
      const response = this.deleteRequest(`/banner/${id}`, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  getDetailById = async (id: string) => {
    try {
      const response = this.getRequest(`/banner/${id}`, { auth: true });
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  editBanner = async (id: string, data: any) => {
    try {
      const response = this.putRequest(`/banner/${id}`, data, {
        auth: true,
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}
const adminBannerSvc = new AdminBannerService();
export default adminBannerSvc;
