import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Login from "../../components/Login/Login";
import Main from "../../Layout/Main";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        }

      ]
    },
  ]);

export default router;