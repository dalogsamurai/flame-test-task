import { useDispatch, useSelector } from "react-redux";
import People from "../../components/people/people.component";
import { GET_PEOPLE_FROM_LS, LS_PEOPLES } from "../../constants";
import { useEffect } from "react";
import "./favorites.page.sass";

const FavoritesPage = () => {
	const dispatch = useDispatch();
	const peoples = useSelector((state: any) => state.peoples);

	useEffect(() => {
		let peoplesCache;

		if (localStorage.getItem(LS_PEOPLES) !== null) {
			// @ts-ignore
			peoplesCache = JSON.parse(localStorage.getItem(LS_PEOPLES));
		}

		if (peoples.length === 0 && peoplesCache) {
			dispatch({
				type: GET_PEOPLE_FROM_LS,
				payload: peoplesCache,
			});
		}
	}, []);

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
