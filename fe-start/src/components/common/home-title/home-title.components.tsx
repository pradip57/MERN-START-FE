import { NavLink } from "react-router-dom";

export type HomeTitleComponentProps = {
  title: string;
  link?: string | null;
};

const HomeTitleComponent = ({ title, link }: HomeTitleComponentProps) => {
  return (
    <>
      <div className="font-semibold text-lg">{title}</div>
      {link ? (
        <>
          <NavLink
            to={link}
            className="bg-slate-300 p-[5px] text-slate-500 rounded-md hover:text-teal-900 font-semibold"
          >
            View all &rarr;
          </NavLink>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomeTitleComponent;
