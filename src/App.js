import "./App.css";
import "flowbite";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
