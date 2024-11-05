import { useContext } from "react"
import { Context } from "../context/Context"

function ContentItem() {
   
    const {numbers} = useContext(Context)


    return (
        <ul>
        <h2>ContentItem</h2>
        
       </ul>
    )
}

export default ContentItem