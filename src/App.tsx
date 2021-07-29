import { Provider } from "react-redux";
import { toast } from "react-toastify";
import "./App.css";
import Router from "./router";
import store from "./store";

toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
