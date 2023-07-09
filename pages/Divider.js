import { hrtime } from "process";
import React from "react";

function Divider() {
  return (
    // <div className=" bg-white  dark:bg-black">
    //   <hr className="border-none w-3/4 mx-auto text-black dark:text-white" />
    // </div>
    <div className="py-5 bg-white dark:bg-black">
      <hr className="w-3/4 mx-auto h-[1.5px] bg-black dark:bg-white" />
    </div>
  );
}

export default Divider;
