import iFavorite from "../../assets/favorite.svg";
import "./people.component.sass";

interface Props {
  height: string;
  mass: string;
  name: string;
  hair_color: string;
}

const People = ({ hair_color, height, mass, name }: Props) => {
  return (
    <div className="people">
      <div className="people__block">
        <div className="people__data">
          <div className="people__name">{name}</div>
          <div className="people__field">Height: {height}</div>
          <div className="people__field">Mass: {mass}</div>
          <div className="people__field">Hair color: {hair_color}</div>
        </div>
      </div>
    </div>
  );
};

export default People;
