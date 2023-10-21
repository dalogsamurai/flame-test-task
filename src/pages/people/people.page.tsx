import iDelete from "../../assets/delete.svg";
import iFavorite from "../../assets/favorite.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IPeople } from "../../types/IPeople";
import Loader from "../../components/loader/loader.component";
import "./people.page.sass";

const PeoplePage = () => {
	const { id } = useParams();
	const [peopleData, setPeopleData] = useState<IPeople>();
	const [isLoading, setLoading] = useState(true);

	const getPeopleData = async () => {
		const res = await fetch(`https://swapi.dev/api/people/${id}`);

		if (res.ok) {
			const resData = JSON.parse(await res.text());
			setPeopleData(resData);
			setLoading(false);
		}
	};

	useEffect(() => {
		getPeopleData();
	}, []);

	return (
		<div className="people-page">
			{isLoading && <Loader />}
			{!isLoading && peopleData && (
				<div className="people-page__block">
					<div className="people-page__data">
						<div className="people-page__name">{peopleData?.name}</div>
						<div className="people-page__field">
							Height: {peopleData.height}
						</div>
						<div className="people-page__field">Mass: {peopleData.mass}</div>
						<div className="people-page__field">
							Hair color: {peopleData.hair_color}
						</div>
					</div>
					<img src={iFavorite} className="people-item__button" alt="" />
					{/* <img src={iDelete} className="people-item__button" alt="" /> */}
				</div>
			)}
		</div>
	);
};

export default PeoplePage;
