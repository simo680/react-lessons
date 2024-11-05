import style from "./OfferItem.module.css";

function OfferItem(props) {
  const { title, color } = props;

  return (
    <div className={style.offer_item} style={{ backgroundColor: color }}>
      <h2 className="white_main_text">{title}</h2>
    </div>
  );
}

export default OfferItem;
