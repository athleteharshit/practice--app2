import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const commonErr = "OOPS! something went wrong!";

const toastList = new Set();
const MAXIMUM_TOAST = 1;

const showAlert = (type: number, message: string = commonErr) => {
  if (toast.error === undefined) {
    toast.configure({
      autoClose: 1000,
      draggable: false,
      newestOnTop: true,
      position: "bottom-left",
    });
  }

  switch (type) {
    case 1: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.success(`🦄 ${message}`, {
          onClose: () => toastList.delete(id),
        });
        toastList.add(id);
      }
      break;
    }
    case 2: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.error(`🦄 ${message}`, {
          onClose: () => toastList.delete(id),
        });
        toastList.add(id);
      }
      break;
    }
    case 3: {
      if (toastList.size < MAXIMUM_TOAST) {
        const id = toast.info(`🦄 ${message}`, {
          onClose: () => toastList.delete(id),
        });
        toastList.add(id);
      }
      break;
    }
  }
};

export default showAlert;
