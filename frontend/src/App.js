import Homepage from "./components/homepage/HomePage";

import Cart from './components/cart/Cart';
import Appbar from "./components/homepage/Appbar";
import CartInfo from "./components/cartinfo/CartInfo";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

function App() {
	return (
		<div className="App container-fluid">
			<div class="row">
				<Appbar/>
			</div>
			<div class="row">
				<Router>
					<Switch>
						<Route path="/cart" exact component={Cart} />
						<Route path="/cart-item-info" exact component={CartInfo} />
						<Route path="/" exact component={Homepage} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
