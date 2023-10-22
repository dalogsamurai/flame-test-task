import { useDispatch, useSelector } from "react-redux";
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
	const dispatch = useDispatch();
	const peoples = useSelector((state: any) => state.peoples);

	const addPeople = () => {
		dispatch({
			type: "ADD_PEOPLE",
			payload: {
				name: name,
				height: height,
				mass: mass,
				hair_color: hair_color,
			},
		});
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{height}</td>
			<td>{mass}</td>
			<td>{hair_color}</td>
			<img
				src={iFavorite}
				className="people-item__button"
				onClick={() => addPeople()}
				alt=""
			/>
			{/* <img src={iDelete} className="people-item__button" alt="" /> */}
		</tr>
	);
};

export default PeopleItem;
