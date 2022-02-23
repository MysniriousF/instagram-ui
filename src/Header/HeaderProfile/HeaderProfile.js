import React, { useContext } from "react";
import "./HeaderProfile.scss";
import Avatar from "../../Common/Avatar/Avatar";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

function HeaderProfile() {
  const { user } = useContext(UserContext);

  return (
    <Link to={`/profile/${user.username}`}>
    <div>
        
      <Avatar image={user.image} size={'md'}/>
      <span className="HeaderProfile">{user.username}</span>

    </div>
    </Link>
  );
}

export default HeaderProfile;
