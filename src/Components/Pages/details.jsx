import Back from "../img/back.png";
import Like from "../img/like.png";
import "../CSS/styles.css";
import OrangeD from "../img/orange-d.png";
import Star from "../img/5star.png";

function Details() {
  return (
    <main>
      <section className="top pt-4">
        <div className="d-flex justify-content-between mt-2">
          <img src={Back} alt="Back" className="back ms-3" />
          <img src={Like} alt="Like" className="back me-3" />
        </div>
        <img src={OrangeD} alt="Product" className="orange-d d-block" />
      </section>
      <section className="px-3">
        <p className="fruit-name">Orange Fruit</p>
        <div>
          <img src={Star} alt="Rating" className="star" />
        </div>
      </section>
    </main>
  );
}

export default Details;
