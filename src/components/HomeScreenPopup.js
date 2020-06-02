import React from "react";
import { Button, Popup } from "semantic-ui-react";

const HomeScreenPopup = () => (
	<Popup
		trigger={<Button style={{ position: "absolute", bottom: "5%", left: "50%" }} icon="add" />}
		content="Install this webapp by tapping on share and then add to homescreen."
		position="top center"
		flowing
	/>
);

export default HomeScreenPopup;
