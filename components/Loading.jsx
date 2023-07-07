import React from "react";
import { Bars } from "react-loader-spinner";
const Loading = () => {
  return (
    <div>
      <Bars
        height="80"
        width="80"
        color="#F29F67"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
