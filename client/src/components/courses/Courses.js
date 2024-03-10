// import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { useAppContext } from "../../context/AppContextProvider";
import Header from "../header/Header";
import Main from "../main/Main";
import Watch from "../watch/Watch";
import SelectVideo from "../uploadvideo/SelectVideo";

const Courses = () => {
  const { showUploadVideo, videos } = useAppContext();

  const routes = [
    ...videos.map((item) => (
      <Route
        key={item.id}
        path={`/courses/watch/${item.id}`}
        element={
          <>
            <Header />
            <Watch video={item} />
          </>
        }
      />
    )),
    <Route
      key="main"
      path="/courses"
      element={
        <>
          <Header />
          <div className="app">
            <Main />
            {showUploadVideo && <SelectVideo />}
          </div>
        </>
      }
    />,
  ];

  const routerObj = createBrowserRouter(routes);

  return (
    <div>
      <RouterProvider router={routerObj} />
    </div>
  );
};

export default Courses;
