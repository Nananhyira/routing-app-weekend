import React from "react";
import { useParams } from "react-router-dom";

function ContactDetails() {
	const { id } = useParams();
	return (
		<div>
			<h1>this is Contact details for {id}</h1>
			<p>
				Once your project is set up and React Router is installed as a
				dependency, open the src/index.js in your text editor. Import
				BrowserRouter from react-router-dom near the top of your file and wrap
				your app in a{" "}
			</p>
		</div>
	);
}

export default ContactDetails;
