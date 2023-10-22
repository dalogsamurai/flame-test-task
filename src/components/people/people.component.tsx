import iFavorite from "../../assets/favorite.svg";
import "./people.component.sass";

type Props = {
	height: string;
	mass: string;
	name: string;
	hair_color: string;
};

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
				<img src={iFavorite} className="people-item__button" alt="" />
				{/* <img src={iDelete} className="people-item__button" alt="" /> */}
			</div>
		</div>
	);
};

export default People;
