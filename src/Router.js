import React, { Suspense } from "react";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Profile from "./containers/Profile";
import Settings from "./containers/Settings";
import { Routes, Route, createBrowserRouter } from "react-router-dom";


// const routeConfig = ({component:Component, fullLayout, ...rest})=>(
//   <Route 
//   {...rest}
//   render={props=> (window.localStorage.getItem("accessToken"))?
//     <ContextLayout.Consumer>
//       {(context)=> {
//         let LayoutTag = fullLayout===true ? context.fullLayout : context.state.activeLayout==='horizantal' ? context.horizontalLayout : context.VerticalLayout;
//         return(
//           <LayoutTag {...props} permission={props.user}>
//             <Suspense>
//               <Component {...props}/>
//             </Suspense>
//           </LayoutTag>
//         )
//       }}
//     </ContextLayout.Consumer>
//     :
//     <Redirect to={{pathname:'/login', state:{from: props.location}}}/>
//   } 
  
//   />
// )

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Profile />,
      },
      {
        path: "/profile",
        element: <Settings />,
      },
  ]);

export default Router;