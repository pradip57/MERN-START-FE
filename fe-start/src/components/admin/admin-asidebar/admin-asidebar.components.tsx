import { FaCog, FaHome, FaSmile } from "react-icons/fa";
import { FaImage, FaProductHunt, FaSitemap, FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const AdminAsidebarDesign = ({
  url,
  icon,
  label,
}: {
  url: string;
  icon: any;
  label: string;
}) => {
  return (
    <>
      <li>
        <NavLink
          to={url}
          className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          {icon}
          <span className="ml-3">{label}</span>
        </NavLink>
      </li>
    </>
  );
};

const AdminAsidebarComponent = () => {
  const adminDesignItems = [
    {
      url: "/admin/banners",
      icon: <FaImage />,
      label: "Banners",
    },
    {
      url: "/admin/brands",
      icon: <FaSmile />,
      label: "Brands",
    },
    {
      url: "/admin/categories",
      icon: <FaSitemap />,
      label: "Categories",
    },

    {
      url: "/admin/products",
      icon: <FaProductHunt />,
      label: "Products",
    },
    {
      url: "/admin/users",
      icon: <FaUser />,
      label: "Users",
    },
  ];
  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            <AdminAsidebarDesign url="/" icon={<FaHome />} label="Home" />
            <AdminAsidebarDesign
              url="/admin"
              icon={<FaCog />}
              label="Dashboard"
            />
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {adminDesignItems &&
              adminDesignItems.map((m: any, i: number) => (
                <AdminAsidebarDesign
                  key={i}
                  url={m.url}
                  icon={m.icon}
                  label={m.label}
                />
              ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AdminAsidebarComponent;
