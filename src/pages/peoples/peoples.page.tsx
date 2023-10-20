import { useEffect, useState } from "react";
import PeopleItem from "../../components/people-item/people-item.component";
import SearchInput from "../../components/search-input/search-input.component";
import "./peoples.page.sass";

const PeoplesPage = () => {
  const [peoples, setPeoples] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getPeoples = async () => {
    const res = await (await fetch("https://swapi.dev/api/people")).text();

    const resPeoples = JSON.parse(res).results;

    // console.log(resPeoples);
    setPeoples(resPeoples);
    if (peoples) {
      setLoading(false);
    }
    console.log(peoples);
  };

  useEffect(() => {
    getPeoples();
  }, []);

  return (
    <div className="peoples-page">
      <SearchInput />

      {/* TODO add loading */}
      {isLoading && <div className="">Loading...</div>}

      {!isLoading && peoples.map((item) => <PeopleItem item={item} />)}
    </div>
  );
};

export default PeoplesPage;
