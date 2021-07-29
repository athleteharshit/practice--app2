import { LoadingModal } from "../modal";
import Utils from "../utils";

export const globalLoaderReducer = (
  state: LoadingModal = new LoadingModal(),
  action: any
) => {
  const { type, payload } = action;
  switch (type) {
    case Utils.actionName.LOADING:
      return { ...state, ...payload };
    default:
      return state;
  }
};
