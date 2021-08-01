import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Marquee from "./components/marquee/Marquee";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
	return (
		<>
			<Sidebar />
			
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/marquee" component={Marquee} />
				</Switch>
			
		</>
	);
}
export default App;
