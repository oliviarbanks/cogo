const Searchbar = ({ imageSrc, placeholder }) => {
  return (
    <div>
      <img src={imageSrc} alt="Search" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Searchbar;
