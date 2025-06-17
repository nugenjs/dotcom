import LOGO from "@assets/react.svg";
import Styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      {/* <div><img src={LOGO} alt='hi' /></div> */}
      <div style={{ marginTop: "1rem" }}>
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="black"
            r="48"
            strokeWidth="4"
          ></circle>
          <line
            style={{ stroke: "black", strokeWidth: 4 }}
            x1="40"
            x2="60"
            y1="70"
            y2="30"
            ></line>
          <line
            style={{ stroke: "black", strokeWidth: 4 }}
            x1="6"
            x2="62"
            y1="30"
            y2="30"
          ></line>
          <line
            style={{ stroke: "black", strokeWidth: 4 }}
            x1="2"
            x2="46"
            y1="55"
            y2="55"
          ></line>

          <line
            style={{ stroke: "black", strokeWidth: 4 }}
            x1="38"
            x2="94"
            y1="70"
            y2="70"
          ></line>
          <line
            style={{ stroke: "black", strokeWidth: 4 }}
            x1="54"
            x2="98"
            y1="45"
            y2="45"
          ></line>
        </svg>
      </div>
      <div className={Styles.linksContainer}>
        <a href="/Projects">Projects</a>
        <a href="/Learnings">Learnings</a>
        <a href="/Tools">Tools</a>
        <a className={Styles.linkDisabled}>Store</a>
        <a href="/About">About</a>
      </div>
    </div>
  );
}
