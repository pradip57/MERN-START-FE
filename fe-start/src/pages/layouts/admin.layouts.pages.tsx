import { Outlet } from "react-router-dom";
import AdminNavbarComponent from "../../components/admin/admin-navbar/admin-navbar.components";
import AdminAsidebarComponent from "../../components/admin/admin-asidebar/admin-asidebar.components";

const AdminLayout = () => {
  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <AdminNavbarComponent />

        <AdminAsidebarComponent />

        <main className="p-4 md:ml-64 h-auto pt-20">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
