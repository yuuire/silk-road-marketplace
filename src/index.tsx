import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/home";
import { Links } from "./pages/links";
import { Projects } from "./pages/projects";
import { NotFound } from "./pages/_404";

import "normalize.css";
import "./style.css";

export function App() {
	return (
		<LocationProvider>
			<Header/>
			<div class="flex flex-1 relative items-stretch px-7">
				<Navbar/>
				<div class="w-full p-10">
					<Router>
						<Route path="/" component={Home}/>
						<Route path="/links" component={Links}/>
						<Route path="/projects" component={Projects}/>
						<Route default component={NotFound}/>
					</Router>
				</div>
			</div>
			<Footer/>
		</LocationProvider>
	);
}

render(<App />, document.getElementById("app"));
