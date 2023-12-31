import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ADD_PEOPLE, DELETE_PEOPLE, GET_PEOPLE_FROM_LS } from "./constants";
import "./index.css";

const defaultState = {
	peoples: [],
};

const reducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case ADD_PEOPLE:
			return {
				...state,
				peoples: [...state.peoples, action.payload],
			};
		case DELETE_PEOPLE:
			return {
				...state,
				peoples: state.peoples.filter(
					// @ts-ignore
					(people) => people.name !== action.payload.name,
				),
			};
		case GET_PEOPLE_FROM_LS:
			return {
				...state,
				peoples: action.payload,
			};

		default:
			return state;
	}
};

// @ts-ignore
const store = createStore(reducer);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
