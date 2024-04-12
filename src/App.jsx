import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Layout/routes";
function App() {

  console.log("first")
  return (
    <>
      <RouterProvider router={Routers()} />
    </>
  );
}

export default App;
