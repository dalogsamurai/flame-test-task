import { useSelector } from "react-redux";
import People from "../../components/people/people.component";
import "./favorites.page.sass";

const FavoritesPage = () => {
	const peoples = useSelector((state: any) => state.peoples);

	return (
		<div className="favorites-page">
			{/* @ts-ignore */}
			{peoples.map((people) => (
				<People
					name={people.name}
					hair_color={people.hair_color}
					height={people.height}
					mass={people.mass}
				/>
			))}
		</div>
	);
};

export default FavoritesPage;
