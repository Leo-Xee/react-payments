import React, { useState } from "react";

import CardList from "./pages/CardList";
import CardAdd from "./pages/CardAdd";
import CardDone from "./pages/CardDone";
import { ADD, DONE, LIST } from "./config/constant";
import { CardInfoProvider } from "./contexts/cardInfoContext";

const App = () => {
	const [page, setPage] = useState(LIST); // list -> add -> done

	return (
		<CardInfoProvider>
			<div className="root-container">
				<div className="root">
					{page === LIST && <CardList setPage={setPage} />}
					{page === ADD && <CardAdd setPage={setPage} />}
					{page === DONE && <CardDone setPage={setPage} />}
					<div id="modal" />
				</div>
			</div>
		</CardInfoProvider>
	);
};

export default App;
