class LoadingModal {
  isLoading: boolean = false;
}

class SignInModal {
  email: string = "";
  password: string = "";
}

class UsersList {
  usersList: any = [];
}

class CategoriesList {
  categoriesList: any = [];
}

class AddCatogoryModal {
  companyName: string = "";
  companyImg: string = "";
}

class CompaniesList {
  companiesList: any = [];
}

class ReducerModal {
  globalLoaderReducer: LoadingModal = new LoadingModal();
  signInModalReducer: SignInModal = new SignInModal();
  usersListReducer: UsersList = new UsersList();
  categoriesListReducer: CategoriesList = new CategoriesList();
  companiesListReducer: CompaniesList = new CompaniesList();
}

export {
  ReducerModal,
  LoadingModal,
  SignInModal,
  UsersList,
  CategoriesList,
  AddCatogoryModal,
  CompaniesList,
};
