import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

export default function ToastMsg(message, msgType) {
   
  return msgType === "success"
    ? toast.success(`${message}`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    : toast.error(`${message}`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
}

