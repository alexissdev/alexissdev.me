import "./Card.css";

export default function Card({ title, subtitle, description, img }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={img} alt="" />
      </div>

      <div className="card-content">
        <div className="card-title">
          <h1>{title}</h1>
        </div>
        <div className="card-subtitle">
          <h3>{subtitle}</h3>
        </div>

        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="btn">Click</div>
      </div>
    </div>
  );
}
