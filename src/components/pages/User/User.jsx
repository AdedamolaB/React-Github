import { useState, useEffect } from "react";
import "./User.css";
import { Link, useParams } from "react-router-dom";
import axios from "../../../axios";
import Repo from "../../ui/Repo";

import {
  FaUsers,
  FaMapMarkerAlt,
  FaHashtag,
  FaGlobe,
  FaGithub,
} from "react-icons/fa";
const User = () => {
  const { login } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // fetch user data asynchronously
    const fetchUserInformation = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUserInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInformation();
  }, [login]);
  return (

    <div className="container">
      <Link to="/" className="back">
        Back
      </Link>
      {/* Fetch user information like profile image , location number of repos from API call*/}
      <div className="user-information">
        <div className="image">
          <img src={userInfo?.avatar_url} alt="avatar_url" />
        </div>
        <div className="user-content">
          <h3>{userInfo?.name}</h3>
          <p>{userInfo?.bio}</p>
          <div className="more-data">
            <p>
              <FaUsers size={30} /> {userInfo?.followers} Followers. Following
              {userInfo?.following}
            </p>

            {userInfo?.location && (
              <p>
                <FaMapMarkerAlt size={30} /> {userInfo?.location}
              </p>
            )}

            {userInfo?.location && (
              <p>
                <FaHashtag size={30} />
                {userInfo?.public_repos} Repositories
              </p>
            )}

            {userInfo?.blog && (
              <p>
                <FaGlobe size={30} /> {userInfo?.blog}
              </p>
            )}
            <p>
              <FaGithub size={30} />
              <a href={userInfo?.html_url}>View GitHub Profile</a>
            </p>
          </div>
        </div>
      </div>
      <div className="user-repos">
        {repos ? (
          repos.map((repo) => {
            return <Repo repo={repo} key={repo.id} />;
          })
        ) : (
          <h2>No Repo found</h2>
        )}
      </div>
    </div>
  );
};

export default User;
