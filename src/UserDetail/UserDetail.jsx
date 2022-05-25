import React from "react";
import "./UserDetail.css";

function UserDetail(props) {
  return (
    <div className="detailContainer">
      <h1>
        User selected: {props?.item?.fname} {props?.item?.lname}
      </h1>
      <div>City: {props?.item?.city}</div>
      <div>State: {props?.item?.state}</div>
      <div>Adress: {props?.item?.streetAddress}</div>
      <div>Company: {props?.item?.company}</div>
    </div>
  );
}
export default UserDetail;
