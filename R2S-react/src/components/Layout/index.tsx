import { HeaderHomepage } from "../HeaderHomepage";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export const Layout = () => {
  return (
    <div>
      <HeaderHomepage />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
