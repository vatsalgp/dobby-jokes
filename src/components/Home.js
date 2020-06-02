import React from "react";
import { Card, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import jokes from "../jokes";

const Home = () => {
	const renderedJokes = jokes.map(([ header ], id) => (
		<Link to={"/" + id} key={id}>
			<Card fluid header={header} color="blue" as="h3" style={{ marginTop: "30px" }} />
		</Link>
	));

	return (
		<Card.Group>
			<Container>{renderedJokes}</Container>
		</Card.Group>
	);
};

export default Home;
