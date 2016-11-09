export const ADD_FOOD = "ADD_FOOD";
export const CLEAR = "CLEAR";

export const addSushi = () => ({
  type: ADD_FOOD,
  food: "🍣"
})
export const addRamen = () => ({
  type: ADD_FOOD,
  food: "🍜"
})
export const addRiceBall = () => ({
  type: ADD_FOOD,
  food: "🍙"
})
export const addSake = () => ({
  type: ADD_FOOD,
  food: "🍶"
})
export const addGreenTea = () => ({
  type: ADD_FOOD,
  food: "🍵"
})

export const clearFood = () => ({
  type: CLEAR
});
