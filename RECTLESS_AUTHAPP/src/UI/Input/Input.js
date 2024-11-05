import s from './Input.module.css'
import {forwardRef} from 'react'

const Input = forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={s.inp_elem}/>
    )
})

export default Input