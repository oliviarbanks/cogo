const Searchbar = ({ imageSrc, placeholder }) => {
  return (
    <div className="flex flex-row relative">
      <img src={imageSrc} alt="Search " className="absolute top-0 left-[-10px]" />
      <input type="text" placeholder={placeholder} className="rounded-full border border-gray-400 bg-white h-10 w-full px-12 py-1 " />
    </div>
  );
};

export default Searchbar;
