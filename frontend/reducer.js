import React from 'react'
import {ADD_FOOD} from './actions.js'


const _defaultState = {
  foods: []
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case ADD_FOOD:
      return ({
        foods: [
          ...oldState.foods,
          action.food
        ]
      })
    default:
      return oldState;
  }
}


export default reducer 