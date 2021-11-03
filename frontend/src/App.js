import Homepage from "./components/homepage/HomePage";

import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cart/Cart';
import Appbar from "./components/homepage/Appbar";
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
						<Route path="/" exact component={Homepage} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
