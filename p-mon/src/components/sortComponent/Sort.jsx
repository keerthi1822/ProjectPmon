const sortByArray = ["name", "weight", "height"];

const Sort = ({ setSortBy }) => {
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      Sort
      <select className="" onChange={handleSort}>
        <option value="" defaultValue>
          sort by..
        </option>
        {sortByArray.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
