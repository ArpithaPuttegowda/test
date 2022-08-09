import React, {lazy, Suspense} from "react";
import {Link, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {A} from "./REDUX/A";
import {B} from "./REDUX/B";
import {C} from "./REDUX/C";
import ConnectFunction from "./REDUX/ConnectFunction";
import ReduxSampleC from "./REDUX/ReduxSampleC";
import {SampleCreateSlice} from "./REDUXCREATESLICE/SampleCreateSlice";
// import AjaxAxios from "./AjaxAxios";
// import ExampleUseReducer from "./ExampleUseReducer";
// import ReusuableList from "./ReusableComponents/ReusuableList";

const AjaxAxios = lazy(() => import("./AjaxAxios"));
const ExampleUseReducer = lazy(() => import("./ExampleUseReducer"));
const ReusuableList = lazy(() => import("./ReusableComponents/ReusuableList"));

export const Menu = () => {
  const linkData = [
    {href: "/rC", content: "Reusuable-Component"},
    {href: "/ajax", content: "Ajax"},
    {href: "/useReducer", content: "UseReducer"},
    {href: "/useMemo", content: "UseMemo"},
    {href: "/A", content: "A"},
    {href: "/B", content: "B"},
    {href: "/C", content: "C"},
    {href: "/reduxSampleC", content: "REDUX Sample Class"},
    {href: "/connectF", content: "CONNECT F"},
    {href: "/createSlice", content: "CREATE SLICE"},
    {href: "/useReducer", content: "UseReducer"}
  ];

  const routeData = [
    {component: <ReusuableList />, path: "/rC"},
    {component: <AjaxAxios />, path: "/ajax"},
    {component: <ExampleUseReducer />, path: "/useReducer"},
    {component: <Navigate to="/rC" />, path: "/*"},
    {component: <A />, path: "/A"},
    {component: <B />, path: "/B"},
    {component: <C />, path: "/C"},
    {component: <ReduxSampleC />, path: "/reduxSampleC"},
    {component: <ConnectFunction />, path: "/connectF"},
    {component: <SampleCreateSlice />, path: "/createSlice"}
  ];
  return (
    <div id="menu">
      <Suspense fallback="...Loading">
        <BrowserRouter>
          <div id="menu-items">
            {linkData.map((linkObj, i) => {
              return (
                <Link to={linkObj.href} key={i}>
                  {linkObj.content}
                </Link>
              );
            })}
          </div>
          <Routes>
            {routeData.map((routeObj, i) => {
              return (
                <Route
                  key={i}
                  element={routeObj.component}
                  path={routeObj.path}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};
