import React from "react";
import { Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const App = () => (
	<Link to="/">
		<Segment clearing>
			<Header as="h1" textAlign="center">
				Dobby Jokes
			</Header>
		</Segment>
	</Link>
);

export default App;
