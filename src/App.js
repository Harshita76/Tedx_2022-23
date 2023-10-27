import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Sponsors from "./pages/sponsors/Sponsors";
import Homepage from "./pages/homepage/Homepage";
import Speakers from "./pages/Speaker/speaker";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Ham from "./components/hamburger/Ham";
import Gallery from "./pages/gallery/Gallery";
import ContactUs from "./pages/contactUs/contactUs";
import Executives from "./pages/executives/Executives";
import Payment from "./pages/payment/Payment";
import termandcond from "./components/other links/termandcond"
import PrivacyPolicy from "./components/other links/privacy_policy";
import RefundPolicy from "./components/other links/refund_policy";
function App() {
	return (
		<>
			<Ham />
			<Sidebar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/sponsor" component={Sponsors} />
				<Route path="/speaker" component={Speakers} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/executives" component={Executives} />
				<Route path="/contactus" component={ContactUs} />
				<Route path="/payments" component={Payment} />
				<Route path="/termandcond" component={termandcond}/>
				<Route path='/privacypolicy' component={PrivacyPolicy}/>
				<Route path='/refundpolicy' component={RefundPolicy}/>
			</Switch>
			<Footer />
		</>
	);
}
export default App;
