import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import { addSushi, addRamen, addRiceBall, addSake, addGreenTea } from './actions.js'
// import Food from './components/food.jsx'
import store from './store';
import FoodContainer from './components/food_container.js'

const App = () => (
	<Provider store={store}>
		<FoodContainer/>
	</Provider>
)

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});


export default App