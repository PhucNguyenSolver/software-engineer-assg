import CartInfo from './components/cartinfo/CartInfo';
import { FoodInfo } from './components/pages/FoodInfo/FoodInfo';
import HandleOrder from './components/checkout/HandleOrder';

function App() {
    return (
        <div className="App">
			{/* <CartInfo
				cartId="#012345"
				cartHeading="Gà rán 4 miếng"
				imgUrl="https://jollibee.com.vn/uploads/dish/427e7a3136f84a-4mingggin.png"
			></CartInfo> */}
			<HandleOrder/>
        </div>
    );
}

export default App;
