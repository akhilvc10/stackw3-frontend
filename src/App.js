import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./Success";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path=":user/:repo" element={<Success />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
