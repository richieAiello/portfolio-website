const NavShadow = ({ className, onClick }) => {
  return (
    <div
      className={`nav__shadow ${className}`}
      onClick={onClick}
    ></div>
  );
};

export default NavShadow;
