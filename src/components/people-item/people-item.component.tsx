import iDelete from "../../assets/delete.svg";
import iFavorite from "../../assets/favorite.svg";
import "./people-item.component.sass";

type Props = {
  height: string;
  mass: string;
  name: string;
  hair_color: string;
};

const PeopleItem = ({ hair_color, height, mass, name }: Props) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
      <td>{hair_color}</td>
      <img src={iFavorite} className="people-item__button" alt="" />
      {/* <img src={iDelete} className="people-item__button" alt="" /> */}
    </tr>
  );
};

export default PeopleItem;
