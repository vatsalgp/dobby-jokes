import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Header from "./Header";
import Home from "./Home";
import Joke from "./Joke";

const App = () => (
	<BrowserRouter>
		<Container>
			<Header />
			<Route exact path="/" component={Home} />
			<Route exact path="/:id" component={Joke} />
		</Container>
	</BrowserRouter>
);

export default App;
