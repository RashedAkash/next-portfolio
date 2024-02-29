const FooterTitle = ({ title }) => {
  return (
    <div>
      <h2 className=" relative pb-2 mb-3 text-white font-semibold text-xl">
        {title}
        <span className=" absolute bg-pink-700 h-[2px] w-1/2 bottom-0 left-0"></span>
      </h2>
    </div>
  );
};

export default FooterTitle;
