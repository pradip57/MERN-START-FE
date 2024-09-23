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
          <a
            href={link}
            className="bg-slate-300 p-[5px] text-slate-500 rounded-sm hover:text-teal-900 font-semibold"
          >
            View all &rarr;
          </a>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomeTitleComponent;
