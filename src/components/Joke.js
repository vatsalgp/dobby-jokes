import React from "react";
import jokes from "../jokes";
import { Card, Container } from "semantic-ui-react";

const Joke = props => {
	const { id } = props.match.params;
	const [ header, description ] = jokes[id];
	return (
		<Card.Group>
			<Container>
				<Card
					fluid
					color="blue"
					as="h3"
					style={{ marginTop: "30px" }}
					header={header}
					description={description}
				/>
			</Container>
		</Card.Group>
	);
};

export default Joke;
