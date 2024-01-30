import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import User from "./pages/User";
import UserDetails from "./pages/UserDetail";
export default function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User/>}/>
          <Route path={"/user/add"} element={<UserDetails/>}/>
          <Route path={`/user/:userId`} element={<UserDetails/>}/>
        </Routes>
      </BrowserRouter>
  )
}
