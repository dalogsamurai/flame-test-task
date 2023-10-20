import "./search-input.component.sass";

const SearchInput = () => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
