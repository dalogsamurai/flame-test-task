import { useEffect, useState } from "react";
import SearchInput from "../../components/search-input/search-input.component";
import Loader from "../../components/loader/loader.component";
import { IPeople } from "../../types/IPeople";
import PeopleList from "../../components/people-list/people-list.component";
import "./peoples.page.sass";
import { getIdFromUrl } from "../../utils/getIdFromUrl";

const PeoplesPage = () => {
	const [peoples, setPeoples] = useState<IPeople[]>([]);
	const [isLoading, setLoading] = useState(true);

	const getPeoples = async () => {
		const res = await fetch("https://swapi.dev/api/people");

		if (res.ok) {
			const resData = JSON.parse(await res.text()).results;
			setLoading(false);
			setPeoples(resData);
		}
	};

	useEffect(() => {
		getPeoples();
	}, []);

	return (
		<div className="peoples-page">
			<SearchInput />

			{isLoading && <Loader />}

			{!isLoading && peoples && <PeopleList items={peoples} />}
		</div>
	);
};

export default PeoplesPage;
