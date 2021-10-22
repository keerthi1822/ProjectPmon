const sortByArray = ["Name", "Weight", "Height"];

const Sort = ({ setSortBy }) => {
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <select className="" onChange={handleSort}>
        <option value="" defaultValue>
          sort pokemons by..
        </option>
        {sortByArray.map((item, i) => (
          <option key={i} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
