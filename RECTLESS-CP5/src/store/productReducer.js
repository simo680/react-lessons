const defaultState = [
  { id: 1, title: "Велосипед", count: 5 },
  { id: 2, title: "Самокат", count: 4 },
  { id: 3, title: "Гантели", count: 7 },
  { id: 4, title: "Ракетки", count: 1 },
];

const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_CART = "ADD_TO_CART";

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return state.map((elem) =>
        elem.id === action.payload ? { ...elem, count: elem.count + 1 } : elem
      );
    case DECREMENT_COUNT:
      const decreasedElement = state.findIndex(
        (elem) => elem.id === action.payload
      );
      if (state[decreasedElement].count === 1)
        return state
          .slice(0, decreasedElement)
          .concat(state.slice(decreasedElement + 1));
      return state.map((elem) =>
        elem.id === action.payload ? { ...elem, count: elem.count - 1 } : elem
      );
    case REMOVE_FROM_CART:
      return state.filter((elem) => elem.id !== action.payload.id);
    case ADD_TO_CART:
      const newItem = {
        id: state.length + 1,
        title: action.payload.title,
        count: 1,
      };
      return [...state, newItem];
    default:
      return state;
  }
};

export const incrementCount = (payload) => ({
  type: "INCREMENT_COUNT",
  payload,
});
export const decrementCount = (payload) => ({
  type: "DECREMENT_COUNT",
  payload,
});
export const removeFromCart = (payload) => ({
  type: "REMOVE_FROM_CART",
  payload,
});
export const addToCart = (payload) => ({ type: "ADD_TO_CART", payload });
