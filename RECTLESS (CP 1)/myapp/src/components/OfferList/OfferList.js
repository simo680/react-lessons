import OfferItem from '../OfferItem/OfferItem'
import style from './OfferList.module.css'


function OfferList() {
    
    let data = [
        {id:1, title: 'Годовое ТО', color: '#22356F'},
        {id:2, title: 'Выравнивание колес', color: '#0052C1'},
        {id:3, title: 'Настройка переключателей', color: '#76B58B'}
    ]
    
    return(
        <div className={style.offerlist_wrapper}>
         {data.map(elem => <OfferItem key={elem.id} title={elem.title} color={elem.color}/>)}
        </div>
    )
}

export default OfferList