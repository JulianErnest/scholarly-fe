import Styles from "../css/home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const getting = () => {
    navigate("/Login");
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.bodycontainer}>
      <h1 className={Styles.header1}>Scholarly</h1>
      <p className={Styles.para1}>
        Scholarly is a web-based system that allows its users to generate<br></br>
       examination papers to be distrubuted to thei beneficiaries, most of which are educational institutions.
      </p>

      <button className={Styles.getStarted} onClick={getting}>
        Get Started
      </button>
      </div>
    </div>
  );
}