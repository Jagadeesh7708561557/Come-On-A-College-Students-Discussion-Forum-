import React from "react";
import '../css/QuoraBox.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function QuoraBox() {
  const user = useSelector(selectUser);
return(
	  <div className = "quoraBox">
      	<div className = "quoraBox_info">
      		<Avatar src = {user.photo}/>
      		<h5>{user.displayName ? user.displayName : user.email}</h5>
      	</div>
      	<div className = "quoraBox_quora">
      		<p>What is Your Question or link?</p>
      	</div>
    </div>
    );
}

export default QuoraBox;	