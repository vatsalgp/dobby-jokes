import React from "react";
import { Card } from "semantic-ui-react";
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

	return <Card.Group>{renderedJokes}</Card.Group>;
};

export default Home;
