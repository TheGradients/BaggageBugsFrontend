

import React from "react";
import { useState } from "react";
// import Body from "./components/Body";
 
// import Body from "./components/Body";
import Body from "./components/Body";
import LandingPage from "./components/landingPage/LandingPage";
import DashboardDetails from "./components/DashboardDetails/DashboardDetails";
// import Login from "./components/login/Login";
// import Login from "./components/login/Login";
// import Register from "./components/Register/register";
import Partneroverview from "./components/Partner/Partneroverview";
import Profile from "./components/Profile/Profile";
 
import Reservation from "./components/reservation/Reservation";
import Reviews from "./components/Reviews/Reviews";
 
import Bookingpage from "./components/Bookingpage/Bookingpage";
import Onboardingpage from "./components/OnBoarding/Onboardingpage";
import Storage from "./components/Bookingpage/Storage";
import SuperAdmin from "./components/SuperAdmin/SuperAdmin";
import SuperAdminUser from "./components/SuperAdmin/SuperAdminUser";
import UserOverview from "./components/User/UserOverview";
 
function App() {
  return (
    <>
      {/* <DashboardDetails/> */}
      {/* <LandingPage/>  */}
      {/* <Login /> */}
      {/* <Register/> */}
  
 
      <Body/>    
       {/* <Bookingpage/> */}
      {/* <Body/>*/}
      {/* <Onboardingpage/> */}
 
      {/* <Partneroverview/> */}
      {/* <Profile/> */}
      {/* <SuperAdmin/> */}
      {/* <SuperAdminUser/> */}
      {/* <Reservation/> */}
      {/* <Reviews/> */}
      {/* <Storage/> */}
      {/* <UserOverview/> */}
    </>
  );

}

export default App;
