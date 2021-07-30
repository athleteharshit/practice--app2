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

class AddCompaniesModal {
  selectCategory: any = "";
  companyName: string = "";
  location: string = "";
  amount: string = "";
  openingHour: any = "";
  contact: string = "";
  description: string = "";
  companyImg: string = "";
}

class NotificationModal {
  title: string = "";
  message: string = "";
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
  AddCompaniesModal,
  NotificationModal,
};
