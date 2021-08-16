import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Sponsors from "./pages/sponsors/Sponsors";
import Homepage from "./pages/homepage/Homepage";
import Speakers from "./pages/speakers/speaker";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
	return (
		<>
			<Sidebar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/marquee" component={Sponsors} />
				<Route path="/speaker" component={Speakers} />
			</Switch>
			<Footer/>
		</>
	);

}
export default App;
