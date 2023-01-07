import Wrect from "../img/wrect.png";
import "../CSS/styles.css";

function Onboarding01() {
  return (
    <main>
      <div>
        <img src={Wrect} alt="svg" className="wrect mx-auto d-flex mt-3" />
      </div>
      <p className="brand">FarmToDoor</p>
    </main>
  );
}

export default Onboarding01;
