export const Button = () => {
    // Farah
  return (
    <button
      id="submit"
      type="submit"
      className={`${style} font-semibold px-4 py-2 w-full rounded-md shadow-md transition-all duration-500`}
      onClick={onClick}>
      {nama}
    </button>
  );
};
