import PeopleAction from "../people-action/people-action.component";
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
      <PeopleAction
        name={name}
        mass={mass}
        hair_color={hair_color}
        height={height}
      />
    </tr>
  );
};

export default PeopleItem;
