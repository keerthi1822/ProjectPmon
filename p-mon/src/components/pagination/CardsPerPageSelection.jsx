const CardsPerPageSelection = ({ setLimitValue }) => {
  return (
    <>
      {/*  <input
        placeholder="set cards per page here..."
        onChange={(e) => setLimitValue(e.target.value)}
      />
 */}
      <select className="" onChange={(e) => setLimitValue(e.target.value)}>
        <option value="" defaultValue>
          Choose cards per page...
        </option>
        {[10, 20, 50].map((num, i) => (
          <option key={i} value={num}>
            {num}
          </option>
        ))}
      </select>
    </>
  );
};

export default CardsPerPageSelection;
