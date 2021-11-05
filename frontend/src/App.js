import Homepage from "./components/homepage/HomePage";
import Cart from './components/cart/Cart';
import Appbar from "./components/homepage/Appbar";
import CartInfo from "./components/cartinfo/CartInfo";
import FoodInfo from "./components/FoodInfo/FoodInfo";
import Login from "./components/Login/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Footer from "./components/homepage/Footer";
import MenuInGen from "./components/MenuInGen";
import CheckOut from "./components/CheckOut/CheckOut";
import HandlerOrder from "./components/HandlerOrder/HandlerOrder";

function App() {
	return (
		<div className="App container-fluid">
			{/* <div class="row">
				<Appbar/>
			</div>
			<div class="row">
				<Router>
					<Switch>
						<Route path="/login" exact component={Login} />
						<Route path="/cart" exact component={Cart} />
						<Route path="/menu" exact component={MenuInGen} />
						<Route path="/checkout" exact component={CheckOut} />
						<Route path="/cart-item-info" exact component={CartInfo} />
						<Route path="/food-info" exact component={FoodInfo} />
						<Route path="/" exact component={Homepage} />
					</Switch>
				</Router>
			</div>
			<div class="row">
				<Footer/>
			</div> */}
			<HandlerOrder/>
			<CheckOut/>
		</div>
	);
}

export default App;
