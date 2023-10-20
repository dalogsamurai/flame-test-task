import { IPeople } from "../../types/IPeople";
import PeopleItem from "../people-item/people-item.component";
import "./people-list.component.sass";

interface Props {
  items: IPeople[];
}

const PeopleList = ({ items }: Props) => {
  return (
    <table className="people-list">
      <tr>
        <th>Name</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Hair color</th>
      </tr>

      {items.map((item) => (
        <PeopleItem
          name={item.name}
          mass={item.mass}
          hair_color={item.hair_color}
          height={item.height}
        />
      ))}
    </table>
  );
};

export default PeopleList;
