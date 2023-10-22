import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IPeople } from "../../types/IPeople";
import Loader from "../../components/loader/loader.component";
import People from "../../components/people/people.component";
import "./people.page.sass";

const PeoplePage = () => {
  const { id } = useParams();
  const [peopleData, setPeopleData] = useState<IPeople>();
  const [isLoading, setLoading] = useState(true);

  const getPeopleData = async () => {
    const res = await fetch(`https://swapi.dev/api/people/${id}`);

    if (res.ok) {
      const resData = JSON.parse(await res.text());
      setPeopleData(resData);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPeopleData();
  }, []);

  return (
    <div className="people-page">
      {isLoading && <Loader />}
      {!isLoading && peopleData && (
        <People
          name={peopleData.name}
          hair_color={peopleData.hair_color}
          height={peopleData.height}
          mass={peopleData.mass}
        />
      )}
    </div>
  );
};

export default PeoplePage;
