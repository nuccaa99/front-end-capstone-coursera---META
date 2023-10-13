import delivery from "../Assets/delivery.png"

function SpecialsCard({ img, title, desc, price, }) {
  return (
    <>
      <div className="special-card">
        <img src={img} alt={title} className="specials-img" />
        <div className="special-card header">
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
        <p className="special-card description">{desc}</p>
        <div className="special-card delivery">
          <p>Order a delivery</p>
          <img src={delivery} alt="delivery bike" />
        </div>
      </div>
    </>

  );
}

export default SpecialsCard;
