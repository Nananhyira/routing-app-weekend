import React from "react";
import {Link} from "react-router-dom"

function Contact() {
	return (
		<div>
			<h1>this is Contact page</h1>
			<p>
				Once your project is set up and React Router is installed as a
				dependency, open the src/index.js in your text editor. Import
				BrowserRouter from react-router-dom near the top of your file and wrap
				your app in a{" "}
				<Link to="/contact/:id">Contact details</Link>
				
			</p>
		</div>
	);
}

export default Contact;
