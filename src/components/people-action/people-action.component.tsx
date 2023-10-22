import { useDispatch, useSelector } from "react-redux";
import iDelete from "../../assets/delete.svg";
import iFavorite from "../../assets/favorite.svg";
import { ADD_PEOPLE, DELETE_PEOPLE } from "../../constants";
import "./people-action.component.sass";
import { isElementInArray } from "../../utils/isElementInArray";

interface Props {
  height: string;
  mass: string;
  name: string;
  hair_color: string;
}

const PeopleAction = ({ hair_color, height, mass, name }: Props) => {
  const dispatch = useDispatch();
  const peoples = useSelector((state: any) => state.peoples);

  const addPeople = () => {
    dispatch({
      type: ADD_PEOPLE,
      payload: {
        name: name,
        height: height,
        mass: mass,
        hair_color: hair_color,
      },
    });
  };

  const deletePeople = () => {
    dispatch({
      type: DELETE_PEOPLE,
      payload: {
        name: name,
        height: height,
        mass: mass,
        hair_color: hair_color,
      },
    });
  };

  return (
    <div className="people-action">
      {isElementInArray(name, peoples) && (
        <img
          src={iDelete}
          className="people-action__button"
          onClick={() => deletePeople()}
          alt=""
        />
      )}

      {!isElementInArray(name, peoples) && (
        <img
          src={iFavorite}
          className="people-action__button"
          onClick={() => addPeople()}
          alt=""
        />
      )}
    </div>
  );
};

export default PeopleAction;
