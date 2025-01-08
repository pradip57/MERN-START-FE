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
import AuthContext from "../context/auth.context";

const RoutingConfig = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: "Pradip Sapkota" }}>
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
              <Route path="*" element={<NotFoundPage />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboardPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
};

export default RoutingConfig;
