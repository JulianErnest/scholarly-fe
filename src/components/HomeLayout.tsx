import { useNavigate, useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import headstyles from "../css/header.module.css";
import footerstyles from "../css/footer.module.css";
import logo from "../css/logo.png";
import { useAuth } from "../hooks/useAuth";
import { useContext, useEffect } from "react";
import { UserContextType } from "../context/User";
import { UserContext } from "../context/UserContext";

export default function HomeLayout() {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext) as UserContextType;

  const homenig = () => {
    navigate("/");
  };

  console.log(user);

  useEffect(() => {
    if (user.id != 0) {
      navigate("/testcreate");
    }
  }, [user]);

  return (
    <div>
      {location.pathname === "/" ? (
        <div>
          <div className={headstyles.header}>
            <div className={headstyles.logopic} onClick={homenig}>
              <img src={logo}></img>Scholarly
            </div>
            <div className={headstyles.headerright}>
              <a className={headstyles.loginbutton} href="/Login">
                Log-in
              </a>
              <a className={headstyles.registerbutton} href="/Register">
                Register
              </a>
            </div>
          </div>
          {outlet}
          <div className={footerstyles.footer}>
            <p className={footerstyles.footerp1}>
              Scholarly<br></br>© Copyright 2022
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
      ) : (
        <>{outlet}</>
      )}
    </div>
  );
}
