import { useNavigate, useOutlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import headstyles from "../css/header.module.css";
import footerstyles from "../css/footer.module.css";
import logo from "../css/logo.png";

export default function ProtectedLayout() {
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();
  const allowedRoutes = ["/testcreate", "/questioncreate", "/showquestion", "/testview"];

  const homenig = () => {
    navigate("/");
  };

  return (
    <div>
      {allowedRoutes.includes(location.pathname.toLowerCase()) && (
        <div>
          <div className={headstyles.header}>
            <div className={headstyles.logopic} onClick={homenig}>
              <img src={logo}></img>Scholarly
            </div>
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
      )}
    </div>
  );
}
