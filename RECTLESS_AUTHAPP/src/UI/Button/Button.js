import s from './Button.module.css'

function Button({title, color, ...otherProps}){
    return (
        <button
            className={`${s.btn_elem} ${s[color]}`}
            {...otherProps}
        >
            {title}
        </button>
    )
}

export default Button