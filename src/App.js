import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";
import Download from "./Download";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path=":user/:repo" element={<Success />} />
				<Route path="zip/:user/:template" element={<Download />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
