import FarmToDoor from "../img/farmtodoor.png";
import "../CSS/styles.css";

function TheLocation() {
  return (
    <main>
      <img src={FarmToDoor} alt="logo" className="lftd mx-auto d-block mt-5" />
      <p className="text-center set-loc mt-5">Set Your Location</p>
    </main>
  );
}

export default TheLocation;
