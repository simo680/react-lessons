const start_data = [
  { id: 11, name: "Alex", age: 30 },
  { id: 12, name: "Neena", age: 40 },
  { id: 13, name: "Steven", age: 50 },
  { id: 14, name: "John", age: 60 },
];

const defaultState = JSON.parse(localStorage.getItem("users")) ?? start_data;

const DELETE_FIRST_USER = "DELETE_FIRST_USER";
const DELETE_LAST_USER = "DELELTE_LAST_USER";
const DEL_USER_BY_ID = "DEL_USER_BY_ID";
const GET_USER_LIST = "GET_USER_LIST";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DELETE_FIRST_USER:
      return state.slice(1);
    case DELETE_LAST_USER:
      return state.slice(0, -1);
    case DEL_USER_BY_ID:
      return state.filter((elem) => elem.id !== action.payload);
    case GET_USER_LIST:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const deleteFirstUserAction = () => ({ type: DELETE_FIRST_USER });
export const deleteLastUserAction = () => ({ type: DELETE_LAST_USER });
export const delUserByIdAction = (payload) => ({
  type: DEL_USER_BY_ID,
  payload,
});
export const getUserListAction = (payload) => ({
  type: GET_USER_LIST,
  payload,
});
