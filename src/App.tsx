import { BrowserRouter, Routes, Route } from "react-router-dom";
import YesOrNo from "./pages/yesorno";

function App() {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<YesOrNo />} />
		</Routes>
	</BrowserRouter>
	)
}

export default App
