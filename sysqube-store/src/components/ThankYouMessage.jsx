import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ThankYouMessage = () => {
  return (
    <div className="w-full text-center items-center py-10 font-semibold text-3xl flex flex-col gap-10">
      <p>Your Order has been Placed</p>
      <p>Thank You</p>
      <CheckCircleIcon sx={{ fontSize: "200px" }} />
    </div>
  );
};

export default ThankYouMessage;
