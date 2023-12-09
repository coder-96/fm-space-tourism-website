import React from "react";
import { Outlet } from "react-router-dom";

function Destination() {
  return (
    <div>
        <Outlet />
    </div>
  );
}

export default Destination;