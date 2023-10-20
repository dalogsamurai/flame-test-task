import { IPeople } from "../../types/IPeople";
import "./search-modal.component.sass";

interface Props {
  items: IPeople[];
}

const SearchModal = ({ items }: Props) => {
  return (
    <div className="search-modal">
      {items.map((item) => (
        <div className="search-modal__item">
          <div className="search-modal__name">{item.name}</div>
          <div className="search-modal__block">
            <div className="search-modal__text">{item.hair_color}</div>
            <div className="search-modal__text">{item.mass}</div>
            <div className="search-modal__text">{item.height}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchModal;
