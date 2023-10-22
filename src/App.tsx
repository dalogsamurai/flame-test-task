import { RouteObject, useRoutes } from "react-router-dom";
import MainPage from "./pages/main/main.page";
import {
	FAVORITES_PAGE_PATH,
	PEOPLES_PAGE_PATH,
	PEOPLE_PAGE_PATH,
} from "./routes/paths";
import FavoritesPage from "./pages/favorites/favorites.page";
import PeoplesPage from "./pages/peoples/peoples.page";
import PeoplePage from "./pages/people/people.page";
import "./App.sass";

function App() {
	const routes: RouteObject[] = [
		{
			path: "/",
			children: [
				{ index: true, element: <MainPage /> },
				{
					path: PEOPLES_PAGE_PATH,
					element: <PeoplesPage />,
				},
				{ path: PEOPLE_PAGE_PATH, element: <PeoplePage /> },
				{ path: FAVORITES_PAGE_PATH, element: <FavoritesPage /> },
				{ path: "*", element: <MainPage /> },
			],
		},
	];

	const page = useRoutes(routes);

	return <div className="App">{page}</div>;
}

export default App;
