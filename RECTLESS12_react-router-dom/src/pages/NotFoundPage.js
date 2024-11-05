import { useLocation, useNavigate } from 'react'


function NotFoundPage() {
    
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className="not-found-page">
            <button onClick={() => navigate('/')}>Go Home</button>
            <button onClick={() => navigate(-1)}>Go Back</button>
           <img src="https://as1.ftcdn.net/v2/jpg/02/99/61/74/1000_F_299617487_fPJ8v9Onthhzwnp4ftILrtSGKs1JCrbh.jpg" alt="error" />
        </div>
    )
}
export default NotFoundPage