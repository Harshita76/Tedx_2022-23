import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Sponsors from "./pages/sponsors/Sponsors";
import Homepage from "./pages/homepage/Homepage";
import Speakers from "./pages/speakers/speaker";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Ham from "./components/hamburger/Ham";
function App() {
	return (
		<>
		<Ham />
			<Sidebar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/sponsor" component={Sponsors} />
				<Route path="/speaker" component={Speakers} />
			</Switch>
			<Footer/>
		</>
	);

}
export default App;