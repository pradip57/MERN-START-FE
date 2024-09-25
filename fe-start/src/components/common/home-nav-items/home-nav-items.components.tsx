import { NavLink } from "react-router-dom";

export type HomeNavItemsComponentsProps = {
  itemsName: string;
  link: string;
};

const HomeNavItemsComponents = ({
  itemsName,
  link,
}: HomeNavItemsComponentsProps) => {
  return (
    <>
      <li>
        <NavLink
          to={link}
          title=""
          className="flex text-[18px] font-medium text-gray-600 hover:text-teal-700 dark:text-white dark:hover:text-teal-500"
        >
          {itemsName}
        </NavLink>
      </li>
    </>
  );
};

export default HomeNavItemsComponents;
