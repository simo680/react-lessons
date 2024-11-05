import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function Aboutpage() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    
    console.log(products);

    return (
        <div className="content">
            <ul>
                {products.map(elem =>
                    <Link key={elem.id} to={'/product/'
                    +elem.id} state={elem}>
                    <li>{elem.title}</li>
                    </Link>
                    )}
                    
               
            </ul>
        </div>
    )
}
export default Aboutpage