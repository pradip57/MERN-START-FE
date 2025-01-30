import { useCallback, useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import TableSkeleton from "../../components/table-skeleton/table-skeleton.components";
import { toast } from "react-toastify";
import adminBannerSvc from "./admin-banner.service";
import { formattoYMD } from "../../config/helper.config";
import { PaginationProps } from "../../config/http.config";

import TablePaginationComponent, {
  PaginationPageType,
} from "../../components/pagination/pagination.components";
import SearchComponent from "../../components/common/form/search/search.components";
import TableActionBtnComponent from "../../components/table-action-btn/table-action-btn.components";

const AdminBannerListPage = () => {
  const [loading, setLoading] = useState(true);
  const [bannerData, setBannerData] = useState<any>();
  const [search, setSearch] = useState<string>();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 15,
    totalPages: 1,
    total: 0,
  });

  const loadBanner = useCallback(
    async ({ page = 1, limit = 15, search = null }: PaginationProps) => {
      setLoading(true);
      try {
        const response = await adminBannerSvc.listAll({
          page: page,
          limit: limit,
          search: search,
        });
        setBannerData(response.data.result);
        setPagination({
          page: +response.data.meta.page,
          limit: +response.data.meta.limit,
          totalPages: +response.data.meta.totalPages,
          total: +response.data.meta.total,
        });

        setLoading(false);
      } catch (exception: any) {
        toast.error(exception.message);
        toast.error("Error fetching banners");
      }
    },
    []
  );
  useEffect(() => {
    loadBanner({ page: 1, limit: pagination.limit });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      loadBanner({
        page: 1,
        limit: pagination.limit,
        search: search,
      });
    }, 100);
    return () => clearTimeout(timeout);
  }, [search]);

  const deleteBanner = async (id: string) => {
    setLoading(true);
    try {
      await adminBannerSvc.deleteBanner(id);
      toast.success("Banner Deleted Succesfully.");
      loadBanner({ page: 1, limit: pagination.limit });
      setLoading(false);
    } catch (exception) {
      console.log(exception);
      toast.error("Error Deleted Banner");
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <h1 className="text-teal-600 text-2xl font-bold mb-5">
          Banner Listing Page
        </h1>
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <SearchComponent searchHandle={setSearch} />
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <NavLink
                to="/admin/banners/create"
                className="flex items-center justify-center text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none dark:focus:ring-teal-800"
              >
                <FaPlus className="me-2" />
                Add Banner
              </NavLink>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3 text-center">
                    Banner Title
                  </th>
                  <th scope="col" className="px-4 py-3 text-center ">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 text-center">
                    Url
                  </th>
                  <th scope="col" className="px-4 py-3 text-center">
                    Image
                  </th>
                  <th scope="col" className="px-4 py-3 text-center">
                    Date
                  </th>

                  <th scope="col" className="px-4 py-3 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              {loading ? (
                <>
                  <TableSkeleton column={6} />
                </>
              ) : (
                <>
                  <tbody>
                    {bannerData && bannerData.length ? (
                      <>
                        {bannerData.map((row: any, index: number) => (
                          <tr
                            key={index}
                            className="border-b dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="text-center px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {row.title}
                            </th>
                            <td className="px-4 py-3 text-center">
                              {row.status === "active" ? (
                                <>
                                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
                                    {row.status}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">
                                    {row.status}
                                  </span>
                                </>
                              )}
                            </td>
                            <td className="px-4 py-3 text-center">
                              <a
                                className="text-blue-600 underline"
                                target="_banner"
                                href={row.link}
                              >
                                {row.link}
                              </a>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <a href="/">
                                <img src={row.image} alt="" />
                              </a>
                            </td>
                            <td className="px-4 py-3 text-center">
                              {formattoYMD(row.start_date) +
                                " to " +
                                formattoYMD(row.end_date)}
                            </td>

                            <td className="flex justify-center  gap-2 px-4 py-3">
                              <TableActionBtnComponent
                                editUrl={"/admin/banners/" + row._id + "/edit"}
                                id={row._id}
                                deleteAction={deleteBanner}
                              />
                            </td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <>
                        <tr>
                          <td
                            className=" text-center whitespace-nowrap px-4 py-4 bg-gray-100 text-xl font-medium text-gray-900"
                            colSpan={7}
                          >
                            No data found
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </>
              )}
            </table>
          </div>
          {loading ? (
            <></>
          ) : (
            <>
              {bannerData && bannerData.length ? (
                <>
                  <TablePaginationComponent
                    pagination={
                      {
                        total: pagination.total,
                        page: pagination.page,
                        totalPages: pagination.totalPages,
                        limit: pagination.limit,
                      } as PaginationPageType
                    }
                    search={search}
                    apiCaller={loadBanner}
                  />
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default AdminBannerListPage;
