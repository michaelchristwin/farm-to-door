import NavBar from "../JSX/Navbar";
import BackG from "../img/back-g.png";
import DP from "../img/dp-o.png";
import "../CSS/styles.css";
import Profile from "../img/profile.png";
import In from "../img/in.png";
import Order from "../img/orders.png";
import Points from "../img/points.png";
import Cards from "../img/cards.png";
import Help from "../img/help.png";

function Settings() {
  return (
    <main className="cart-g">
      <div className="d-flex px-3 py-4">
        <img src={BackG} alt="Back" className="back-g" />
        <p className="cart-t mt-2 mx-auto d-block">Setting</p>
      </div>
      <section className="the-pay mb-5 pt-4">
        <img src={DP} alt="dp" className="dp-o mx-auto d-block" />
        <span className="text-center d-block user mt-2">Mashok Khan</span>
        <div className="mt-3">
          <div className="tools mx-auto d-flex p-2 justify-content-between">
            <div className="d-flex ms-2">
              <img src={Profile} alt="profile" className="profile" />
              <p className="tool-t ms-3 mt-1">Edit Profile</p>
            </div>

            <img src={In} alt="" className="in mt-3 me-3" />
          </div>
          <div className="tools mx-auto d-flex p-2 justify-content-between mt-3">
            <div className="d-flex ms-2">
              <img src={Order} alt="profile" className="profile" />
              <p className="tool-t ms-3 mt-1">My Orders History</p>
            </div>

            <img src={In} alt="" className="in mt-3 me-3" />
          </div>
          <div className="tools mx-auto d-flex p-2 justify-content-between mt-3">
            <div className="d-flex ms-2">
              <img src={Points} alt="profile" className="profile" />
              <p className="tool-t ms-3 mt-1">Points</p>
            </div>

            <img src={In} alt="" className="in mt-3 me-3" />
          </div>
          <div className="tools mx-auto d-flex p-2 justify-content-between mt-3">
            <div className="d-flex ms-2">
              <img src={Cards} alt="profile" className="profile" />
              <p className="tool-t ms-3 mt-1">Manage Cards</p>
            </div>
            <img src={In} alt="" className="in mt-3 me-3" />
          </div>
          <div className="tools mx-auto d-flex p-2 justify-content-between mt-3">
            <div className="d-flex ms-2">
              <img src={Help} alt="profile" className="profile" />
              <p className="tool-t ms-3 mt-1">My Orders History</p>
            </div>
            <img src={In} alt="" className="in mt-3 me-3" />
          </div>
        </div>
        <button className="btn checkout d-block mx-auto mt-3">Log Out</button>
        <NavBar />
      </section>
    </main>
  );
}

export default Settings;
