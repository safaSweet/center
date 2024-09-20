import React from "react";
import FetchAllReferral from "../Api/FetchAllReferral";

function Add_referralToEntity() {
  // http://127.0.0.1:8000/api/showReferralToEntitiy
  // http://127.0.0.1:8000/api/showEntitiyToReferral

  return (
    <>
      <FetchAllReferral />
    </>
  );
}

export default Add_referralToEntity;
