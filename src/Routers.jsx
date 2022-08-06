import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Error from "./components/Error";
import ContactDetails from "./components/ContactDetails";

function Routers() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/project" element={<Project />} />
				<Route path="*" element={<Error />} />
				<Route path="/contact/:id" element={<ContactDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routers;
