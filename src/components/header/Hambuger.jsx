const Hamburger = ({ className, disabled, onClick }) => {
  return (
    <button
      type="button"
      aria-label="Open and close navigation menu."
      className={`hamburger btn ${className}`}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default Hamburger;
