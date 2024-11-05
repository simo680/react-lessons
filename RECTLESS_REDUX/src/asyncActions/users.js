import { userInfoAction } from "../store/employeeReducer";
import { getUserListAction } from "../store/usersReducer";

export function fetchUserList() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(getUserListAction(data)));
  };
}

export function fetchUser(id) {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => res.json())
      .then((data) => dispatch(userInfoAction(data)));
  };
}




