import "../CSS/styles.css";

function Items(props) {
  return (
    <main>
      <div className="d-flex">
        <img src={props.img} alt="Strawberry" className="p-list me-3" />
        <div className="d-block">
          <span className="d-block pl-name">{props.name}</span>
          <span className="d-block pl-price">Tsh{props.price}</span>
        </div>
      </div>
    </main>
  );
}

export default Items;
