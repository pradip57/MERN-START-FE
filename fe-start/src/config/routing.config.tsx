import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home.pages";
import NotFoundPage from "../pages/not-found/not-found.pages";
import CategoryPage from "../pages/categories/categories.pages";
import BrandPage from "../pages/brands/brands.pages";
import ProductPage from "../pages/products/products.pages";

const RoutingConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/products" element={<ProductPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingConfig;
