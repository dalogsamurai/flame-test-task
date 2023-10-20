import { useEffect, useState } from "react";
import "./search-input.component.sass";

const SearchInput = () => {
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    console.log(searchStr);

    // TODO add req
  }, [searchStr]);

  return (
    <div className="">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchStr(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
