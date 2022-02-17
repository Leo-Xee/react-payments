import React, { useState } from "react";

import CardList from "./pages/CardList";
import CardAdd from "./pages/CardAdd";
import CardDone from "./pages/CardDone";
import useForm from "./hooks/useForm";
import { ADD, DONE, LIST } from "./config/constant";
import { CardInfoProvider } from "./contexts/cardInfoContext";

const App = () => {
	const [page, setPage] = useState(LIST); // list -> add -> done
	const [cardList, setCardList] = useState([]);
	const [cardInfo, onChangeCardInfo, reset] = useForm({
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
		<CardInfoProvider>
			<div className="root-container">
				<div className="root">
					{page === LIST && <CardList setPage={setPage} cardList={cardList} />}
					{page === ADD && (
						<CardAdd
							setPage={setPage}
							cardInfo={cardInfo}
							onChangeCardInfo={onChangeCardInfo}
						/>
					)}
					{page === DONE && (
						<CardDone
							setPage={setPage}
							cardInfo={cardInfo}
							onChangeCardInfo={onChangeCardInfo}
							reset={reset}
							setCardList={setCardList}
						/>
					)}
					<div id="modal" />
				</div>
			</div>
		</CardInfoProvider>
	);
};

export default App;
