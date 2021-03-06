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
import { useState, useEffect } from "react";
import Success from "./components/CheckOut/Success";


import EditPage from "./components/staff/FoodEditor";

function App() {
	const [nCartItem, setNCartItem] = useState(0);
	useEffect(() => {
		if(localStorage.getItem("cart")) {
			setNCartItem(JSON.parse(localStorage.getItem("cart")).length);
		}
	}, [])

	return (
		<div className="App container-fluid">
			<div class="row">
				<Appbar nCartItem={nCartItem} />
			</div>
			<div id="MenuFirst">
				<Router>
					<Switch>
						<ProtectedRoute exact path='/manage-order' component={HandlerOrder} />
						<Route path="/login" exact component={Login} />
						<Route path="/my-cart" exact render={() => <Cart setNCartItem={setNCartItem}/>} />
						<Route path="/menu" exact component={TaskSearch} />
						<Route path="/checkout" exact component={CheckOut} />
						<Route path="/cart-item-info/:id" exact component={CartInfo} />
						<Route path="/food-info/:foodId" exact render={props => <FoodInfo setNCartItem={setNCartItem}/>} />
						<Route path="/success" exact component={Success}/>
						<Route path="/" exact component={Homepage} />
						<Route path='/edit' exact component={EditPage} />
					</Switch>
				</Router>
			</div>
			<div id="PaginationSearch">

			</div>
			
			<div class="row">
				<Footer/>
			</div>
		</div>
	);
}

export default App;
