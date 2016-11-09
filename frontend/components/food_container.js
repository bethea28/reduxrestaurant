import {connect} from 'react-redux';
import Food from './food.jsx'
import {createStore} from 'redux'
import store from '../store.js'

const mapStoreToProps = store => (
  {foods: store.foods}
)

export default connect(mapStoreToProps)(Food);

// export var App = connect(mapStoreToProps)(Food);


