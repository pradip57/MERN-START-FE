import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home.pages";
import NotFoundPage from "../pages/not-found/not-found.pages";
import CategoryPage from "../pages/categories/categories.pages";
import BrandPage from "../pages/brands/brands.pages";
import ProductPage from "../pages/products/products.pages";
import AdminDashboardPage from "../pages/admin-dashboard/admin-dashboard.pages";
import { ActivateAccount, LoginPage, RegisterPage } from "../pages/auth";
import { AdminLayout, HomePageLayout } from "../pages/layouts";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../context/auth.context";
import PermissionChecker from "./permission.config";

import AdminBannerListPage from "../pages/admin-banners/admin-banners.pages";
import AdminBannerCreatePage from "../pages/admin-banners/admin-banners-create.pages";
import AdminBannerEditPage from "../pages/admin-banners/admin-banners-edit.pages";

const RoutingConfig = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="categories" element={<CategoryPage />} />
              <Route path="brands" element={<BrandPage />} />
              <Route path="products" element={<ProductPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="activate/:token" element={<ActivateAccount />} />
              <Route path="*" element={<NotFoundPage link={"/"} />} />
            </Route>

            <Route
              path="/admin"
              element={
                <PermissionChecker allowedBy="admin">
                  <AdminLayout />
                </PermissionChecker>
              }
            >
              <Route index element={<AdminDashboardPage />} />
              <Route path="banners" element={<AdminBannerListPage />} />
              <Route
                path="banners/create"
                element={<AdminBannerCreatePage />}
              />
              <Route
                path="banners/:id/edit"
                element={<AdminBannerEditPage />}
              />

              <Route path="*" element={<NotFoundPage link={"/admin"} />} />
            </Route>

            <Route
              path="/seller"
              element={
                <PermissionChecker allowedBy="seller">
                  <AdminLayout />
                </PermissionChecker>
              }
            >
              <Route index element={<AdminDashboardPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default RoutingConfig;
