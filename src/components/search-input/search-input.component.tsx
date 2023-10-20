import { useEffect, useState } from "react";
import { IPeople } from "../../types/IPeople";
import iSearch from "../../assets/search.svg";
import SearchModal from "../search-modal/search-modal.component";
import "./search-input.component.sass";

const SearchInput = () => {
  const [searchStr, setSearchStr] = useState("");
  const [searchRes, setSearchRes] = useState<IPeople[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const search = async (str: string) => {
    const res = await fetch(`https://swapi.dev/api/people/?search=${str}`);

    if (res.ok) {
      const resData = JSON.parse(await res.text()).results;
      setSearchRes(resData);
      setModalOpen(true);
    }
  };

  useEffect(() => {
    if (searchStr.length > 1) {
      search(searchStr);
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [searchStr]);

  return (
    <div className="search-input">
      <img src={iSearch} className="search-input__img" alt="" />

      <input
        type="text"
        placeholder="Search"
        className="search-input__input"
        // @ts-ignore
        onInput={(e) => setSearchStr(e.target.value)}
      />

      {searchRes && isModalOpen && <SearchModal items={searchRes} />}
    </div>
  );
};

export default SearchInput;
