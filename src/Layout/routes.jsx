import React, { useContext, useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root";
import Projects from "../Pages/Projects";
import Ourteam from "../Pages/Ourteam";
import Contact from "../Pages/Contact";
export default function Routers() {
  const [show, setshow] = useState(false);
  const [messTosa, setmessTosa] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 3000);
  }, [show]);

  let routers = createBrowserRouter([
    {
      path: "",
      element: <Root show={show} setshow={setshow} messTosa={messTosa} />,
      children: [
        { index: true, element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/ourTeam", element: <Ourteam /> },
        {
          path: "/contactUs",
          element: <Contact setshow={setshow} setmessTosa={setmessTosa} />,
        },
      ],
    },
  ]);

  return routers;
}
