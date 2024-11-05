const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? "star-filled" : "star-empty"}>
      &#9733;
    </span>
  ));

  return <div>{stars}</div>;
};

export default StarRating;
