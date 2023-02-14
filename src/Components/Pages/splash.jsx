import FarmTo from "../img/farmtodoor.png";
import "../CSS/styles.css";

function Splash() {
  return (
    <main>
      <a href="/farm-to-door/onboarding1">
        <img src={FarmTo} alt="Logo" className="ftd d-flex mx-auto" />
      </a>
    </main>
  );
}

export default Splash;
