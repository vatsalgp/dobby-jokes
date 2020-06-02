import React from "react";
import { Card } from "semantic-ui-react";
import HomeScreenPopup from "./HomeScreenPopup";
import jokes from "../jokes";

const Home = () => {
	const renderedJokes = jokes.map(([ header ], id) => (
		<Card
			fluid
			header={header}
			href={"/" + id}
			key={id}
			color="blue"
			style={{ marginTop: "30px", marginBottom: "0" }}
		/>
	));

	const displayPopup = () => {
		const isInStandaloneMode = () => "standalone" in window.navigator && window.navigator.standalone;
		const isIos = () => {
			const userAgent = window.navigator.userAgent.toLowerCase();
			return /iphone|ipad|ipod/.test(userAgent);
		};
		if (isIos() && !isInStandaloneMode()) {
			return <HomeScreenPopup />;
		}
	};

	return (
		<div>
			<Card.Group>{renderedJokes}</Card.Group>
			{displayPopup()}
		</div>
	);
};

export default Home;
