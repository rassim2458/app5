import { Navigate, Outlet } from "react-router-dom";
import { Stack } from '@mui/material';
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const isLoggedIn = true;


const DashboardLayout = () => {


if(!isLoggedIn){
  return <Navigate to='/auth/login'/>;
}

  return (
    <Stack direction='row'>
      {/* SideBar */}
      <SideBar/>
      <Outlet />
    </Stack>
    
  );
};

export default DashboardLayout;
