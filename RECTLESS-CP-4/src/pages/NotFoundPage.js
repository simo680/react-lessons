import { useLocation, useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <div className="not-found-page">
      <img
        src="https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg"
        alt="error"
      />
      <button className="back-button" onClick={() => navigate("/products")}>
        Go Back to Products
      </button>
    </div>
  );
}

export default NotFoundPage;
