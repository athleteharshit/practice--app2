import { CompaniesList } from "../../modal";
import Utils from "../../utils";

export const companiesListReducer = (
  state: CompaniesList = new CompaniesList(),
  action: any
) => {
  const { type, payload } = action;
  switch (type) {
    case Utils.actionName.GET_COMPANY_LIST:
      return { ...state, companiesList: payload };
    default:
      return state;
  }
};
