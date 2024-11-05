function Post(props) {
    let {color, title, text} = props

return(
    <div className="post_item">
        <h2 style={{color: 'blue'}}>{title}</h2>
        <p>{text}</p>
    </div>
)

}

export default Post