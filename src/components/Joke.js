import React from "react";
import jokes from "../jokes";
import { Card } from "semantic-ui-react";

const Joke = props => {
	const { id } = props.match.params;
	const [ header, description ] = jokes[id];
	return (
		<Card.Group>
			<Card fluid color="blue" style={{ marginTop: "30px" }} header={header} description={description} />
		</Card.Group>
	);
};

export default Joke;
