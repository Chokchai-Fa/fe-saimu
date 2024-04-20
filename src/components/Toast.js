import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const errorNotify = (errorText) =>
toast.error(errorText, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});



export const successNotify = (text) =>
    toast.success(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
});

