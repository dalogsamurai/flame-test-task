import PeopleAction from "../people-action/people-action.component";
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
				<PeopleAction
					name={name}
					mass={mass}
					hair_color={hair_color}
					height={height}
				/>
			</div>
		</div>
	);
};

export default People;
