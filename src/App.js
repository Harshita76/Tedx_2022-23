import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Sponsors from "./pages/sponsors/Sponsors";
import Homepage from "./pages/homepage/Homepage";
import Speakers from "./pages/Speaker/speaker";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Ham from "./components/hamburger/Ham";
import Previous_Speakers from "./pages/Speakers_Prev/Speakers"

function App() {
	return (
		<>
		<Ham />
			<Sidebar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/sponsor" component={Sponsors} />
				<Route path="/speaker" component={Speakers} />
				<Route path = "/prevspk" component = {Previous_Speakers} />
			</Switch>
			<Footer/>
		</>
	);

}
export default App;