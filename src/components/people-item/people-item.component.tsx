import { FC } from "react";
import { IPeople } from "../../types/IPeople";
import "./people-item.component.sass";

interface Props {
	item: IPeople;
}

const PeopleItem = ({ item }: Props) => {
	// TODO
	return <div className="">{item.name}</div>;
};

export default PeopleItem;
