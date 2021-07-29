import { CategoriesList } from "../../modal";
import Utils from "../../utils";

export const categoriesListReducer = (
  state: CategoriesList = new CategoriesList(),
  action: any
) => {
  const { type, payload } = action;
  switch (type) {
    case Utils.actionName.GET_CATEGORY_LIST:
      return { ...state, categoriesList: payload };
    default:
      return state;
  }
};
