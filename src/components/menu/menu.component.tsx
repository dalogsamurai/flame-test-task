import { Link, Outlet } from "react-router-dom";
import {
	FAVORITES_PAGE_PATH,
	MAIN_PAGE_PATH,
	PEOPLES_PAGE_PATH,
} from "../../routes/paths";
import "./menu.component.sass";

const Menu = () => {
	return (
		<div>
			<div className="">
				<Link to={MAIN_PAGE_PATH}>Main Page</Link>
			</div>

			<div className="">
				<Link to={FAVORITES_PAGE_PATH}>Favorites</Link>
			</div>
			<div className="">
				<Link to={PEOPLES_PAGE_PATH}>Peoples</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default Menu;
