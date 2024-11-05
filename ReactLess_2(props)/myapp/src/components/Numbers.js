function Numbers() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    return(
        <ul>
            {num.map((elem, index) => <li key={index}>{elem}</li>)}
        </ul>
    )
}


export default Numbers