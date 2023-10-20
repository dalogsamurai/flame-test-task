import { useEffect, useState } from "react";
import "./peoples.page.sass";

const PeoplesPage = () => {
  const [peoples, setPeoples] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getPeoples = async () => {
    const res = await (await fetch("https://swapi.dev/api/people")).text();

    const resPeoples = JSON.parse(res).results;

    // console.log(resPeoples);
    setPeoples(resPeoples);
  };

  useEffect(() => {
    getPeoples();
  }, []);

  return <div className="peoples-page"></div>;
};

export default PeoplesPage;
