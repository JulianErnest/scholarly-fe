import { useNavigate, useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import headstyles from "../css/header.module.css";
import footerstyles from "../css/footer.module.css";
import logo from "../css/logo.png";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import { UserContextType } from "../context/User";

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext) as UserContextType;

  const homenig = () => {
    navigate("/");
  };

  useEffect(() => {
    if (user.id == 0) {
      navigate("/");
    }
  }, []);

  function handleClick(destination: string) {
    navigate(destination);
  }

  return (
    <div>
      <div>
        <div className={headstyles.header}>
          <div className={headstyles.logopic} onClick={homenig}>
            <img src={logo}></img>Scholarly
          </div>
          {user.user_type === "CREATOR" ? (
            <>
              <p
                onClick={() => handleClick("testview")}
                style={{ marginRight: 20 }}
              >
                View Tests
              </p>
              <p onClick={() => handleClick("testcreate")}>Create Test</p>
            </>
          ) : (
            <>
              <p
                onClick={() => handleClick("testview")}
                style={{ marginRight: 20 }}
              ></p>
              <p onClick={() => handleClick("tests")}>Tests</p>
              <p
                onClick={() => handleClick("testview")}
                style={{ marginRight: 20 }}
              ></p>
              <p onClick={() => handleClick("subjectcreate")}>Subjects</p>
              <p
                onClick={() => handleClick("testview")}
                style={{ marginRight: 20 }}
              ></p>
              <p onClick={() => handleClick("items")}>Items</p>
            </>
          )}
          <div className={headstyles.headerright}></div>
        </div>
        {outlet}
        <div className={footerstyles.footer}>
          <p className={footerstyles.footerp1}>
            <br></br>© Copyright 2022
          </p>
          <a href="http://linkedin.com" className={footerstyles.fb}>
            <AiFillLinkedin className={footerstyles.icon} size={40} />
          </a>
          <a href="http://instagram.com" className={footerstyles.insta}>
            <AiFillInstagram className={footerstyles.icon} size={40} />
          </a>
          <a href="http://twitter.com" className={footerstyles.twit}>
            <AiOutlineTwitter className={footerstyles.icon} size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}
