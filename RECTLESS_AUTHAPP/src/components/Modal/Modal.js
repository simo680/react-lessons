import { Link, Route, Routes } from 'react-router-dom'
import {ReactComponent as XMarkIcon} from '../../icons/xmark-solid.svg'
import s from './Modal.module.css'
import FormElem from '../FormElem/FormElem'

function Modal({active, setActive}){
    return(
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modal_content} ${active && s.active}`}>
                <XMarkIcon onClick={() => setActive(false)} className={s.xmark_icon}/>
                <Routes>
                    <Route path='/login' element={<FormElem
                                                    title='Авторизация' 
                                                    button={{submit: 'Авторизоваться', redirect: 'Регистрация'}}
                                                    link={'/registration'}
                                                    type={'login'}
                                                    input={{email: 'Почта', password: 'Пароль'}}
                                                    infoText="Введите логин и пароль вашего аккаунта"
                                                />}/>
                    <Route path='/registration' element={<FormElem
                                                    title='Регистрация'    
                                                    button={{submit: 'Зарегистрироваться', redirect: 'Авторизация'}}  
                                                    link={'/login'}
                                                    type={'reg'}
                                                    input={{email: 'Почта', password: 'Пароль', secondPassword: 'Подтверждение пороля'}}
                                                    infoText="Регистрируясь на сейте, вы соглашаетесь с нашими правилами и полтикой конфиденциальности"
                                                />}/>
                    <Route path='/reset' element={<FormElem
                                                    title='Cброс пароля'
                                                    button={{submit: 'Сброс пароля', redirect: 'Авторизация'}}     
                                                    link={'/login'}  
                                                    type={'reset'} 
                                                    input={{email: 'Почта'}}
                                                    infoText="Укажите почту зарегистрированного акканта. Ссылка на сброс пароля будет действовать 24 часа"
                                                />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Modal