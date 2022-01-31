import React, { useState } from "react";

import CardList from "./pages/CardList";
import CardAdd from "./pages/CardAdd";
import CardDone from "./pages/CardDone";
import useForm from "./hooks/useForm";
import { ADD, DONE, LIST } from "./config/constant";

const App = () => {
	const [page, setPage] = useState(LIST); // list -> add -> done
	const [cardInfo, onChangeCardInfo] = useForm({
		name: "",
		firstNum: "",
		secondNum: "",
		thirdNum: "",
		fourthNum: "",
		owner: "",
		monthExpiration: "",
		yearExpiration: "",
		secureCode: "",
		firstPassword: "",
		secondPassword: "",
		alias: "",
	});

	return (
		<div className="root-container">
			<div className="root">
				{page === LIST && <CardList setPage={setPage} cardInfo={cardInfo} />}
				{page === ADD && (
					<CardAdd
						setPage={setPage}
						cardInfo={cardInfo}
						onChangeCardInfo={onChangeCardInfo}
					/>
				)}
				{page === DONE && <CardDone setPage={setPage} />}
				<div id="modal"></div>
			</div>
		</div>
	);
};

export default App;
