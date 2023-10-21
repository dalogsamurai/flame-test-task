import iLoading from "../../assets/loading.svg";
import "./loader.component.sass";

const Loader = () => {
	return (
		<div className="loader">
			<img src={iLoading} className="loader__img" alt="" />
		</div>
	);
};

export default Loader;
