import 'bootstrap/dist/css/bootstrap.css'
import CartInfo from './components/cartinfo/CartInfo';
import { FoodInfo } from './components/pages/FoodInfo/FoodInfo';

function App() {
    return (
        <div className="App">
            {/* <FoodInfo/> */}
			<CartInfo
				cartId="#012345"
				cartHeading="Gà rán 4 miếng"
				imgUrl="https://jollibee.com.vn/uploads/dish/427e7a3136f84a-4mingggin.png"
			></CartInfo>
        </div>
    );
}

export default App;
