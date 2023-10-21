import { Link } from "react-router-dom";
import { IPeople } from "../../types/IPeople";
import { getIdFromUrl } from "../../utils/getIdFromUrl";
import "./search-modal.component.sass";

interface Props {
	items: IPeople[];
}

const SearchModal = ({ items }: Props) => {
	return (
		<div className="search-modal">
			{items.map((item) => (
				<Link to={`${getIdFromUrl(item.url)}`}>
					<div className="search-modal__item">
						<div className="search-modal__name">{item.name}</div>
						<div className="search-modal__block">
							<div className="search-modal__text">{item.hair_color}</div>
							<div className="search-modal__text">{item.mass}</div>
							<div className="search-modal__text">{item.height}</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default SearchModal;
