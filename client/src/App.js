import React from "react";
import "./App.css";
import Register from "./components/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/rootlayout/RootLayout";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Finance from "./components/finance/Finance";
import Courses from "./components/courses/Courses";
import ErrorPage from "./components/errorpage/ErrorPage"
import Watch from "./components/watch/Watch";
import Weather from "./components/weather/Weather";

// import EmpProfile from "./components/empprofile/EmpProfile";

function App() {
 
 

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/login",
          element: <Login />,
        },{
          path: "/register",
          element: <Register />,
        }
        ,{
          path: "/finance",
          element: <Finance />,
        }
        ,{
          path: "/courses",
          element: <Courses />,
          children:[
            {
              path: "watch",
          element: <Watch />,
            }
          ]
        },{
          path:"/weather",
          element:<Weather/>,
        }





      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={routerObj} />
      
    </div>
  );
}

export default App;