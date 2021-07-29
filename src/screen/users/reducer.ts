import { UsersList } from "../../modal";
import Utils from "../../utils";

export const usersListReducer = (
  state: UsersList = new UsersList(),
  action: any
) => {
  const { type, payload } = action;
  switch (type) {
    case Utils.actionName.GET_USERS_LIST:
      return { ...state, usersList: payload };
    default:
      return state;
  }
};
