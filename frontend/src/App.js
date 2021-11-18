import Homepage from "./components/homepage/HomePage";
import Cart from './components/cart/Cart';
import Appbar from "./components/homepage/Appbar";
import CartInfo from "./components/cartinfo/CartInfo";
import FoodInfo from "./components/FoodInfo/FoodInfo";
import Login from "./components/Login/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Footer from "./components/homepage/Footer";
import TaskSearch from "./components/Menu/TaskSearch";
import CheckOut from "./components/CheckOut/CheckOut";
import HandlerOrder from "./components/HandlerOrder/HandlerOrder";
import ProtectedRoute from "./components/Login/ProtectedRoute";



function App() {
	return (
		<div className="App container-fluid">
			<div class="row">
				<Appbar />
			</div>
			<div class="row">
				<Router>
					<Switch>
						<ProtectedRoute exact path='/manage-order' exact component={HandlerOrder} />
						<Route path="/login" exact component={Login} />
						<Route path="/cart" exact component={Cart} />
						<Route path="/menu" exact component={TaskSearch} />
						<Route path="/checkout" exact component={CheckOut} />
						<Route path="/cart-item-info/:id" exact component={CartInfo} />
						<Route path="/food-info/:foodId" exact component={FoodInfo} />
						<Route path="/" exact component={Homepage} />
					</Switch>
				</Router>
			</div>
			<div class="row">
				<Footer/>
			</div>
		</div>
	);
}

export default App;
