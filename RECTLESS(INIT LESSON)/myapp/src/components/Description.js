function Description(props) {


  console.log(props);

    // let message = 'Hello!'
    // let number = 10
    // let visible = true

       
    // return (
    //   <div>
    // <p id={message+'_elem'}>{message}</p>
    // <p>{(number < 10) ? 'number < 10':'number >= 10'}</p>
    // {(visible) ? <h1>true</h1> : <h5>false</h5>}
    // {(visible) ? <h1>true</h1> : ''}
    
    // </div>
    // )
    

  // let num = 6

    // let message = 'Hello!'
    //  let visible = true

    //    return (
    //     <div>
    //      {(num ** 0.5 % 1 === 0) ? <h1>Вычисляется</h1> : <p>Не Вычисляется</p>}
    //      <p style={{color: (visible) ? 'red': 'green'}} > {message}</p>
    //     </div>
    //    )

  let {size, color, text} = props

    // let size = 'xl'
    // let color = 'red'

    let sizeObj = {} 


    // if(size === 'xl'){
    //   sizeObj.height = '400px'
    //   sizeObj.width = '400px'
    // } else if (size === 'l'){
    //   sizeObj.height = '200px'
    //   sizeObj.width = '200px'
    // } else if (size === 'm'){
    //   sizeObj.height = '100px'
    //   sizeObj.width = '100px'
    // }

    let sizeValue = {
      xl: '400px',
      l: '200px',
      m: '100px'
    }


    let styleObj = {
      backgroundColor: color,
      width: sizeValue[size],
      height: sizeValue[size]
    }
    return (
      <div style={styleObj}>
        {text}
      </div>  
    )

  // let productInfo = {
  //   name: 'Велосипед',
  //   price: 199,
  //   salePrice: 199
  // }

  // let isSale = productInfo.price !== productInfo.salePrice

  // return (
  //   <div>
  //   <h1>{productInfo.name}</h1>
  //   {isSale && <p style={{color: 'red'}}>Sale!!!</p>}
  //   </div>
  // )
     }

     
  export default Description