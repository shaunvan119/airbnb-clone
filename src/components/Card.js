import katie from '../assets/katie.png'
import star from '../assets/star.png'


export default function Card(props) {
    return (
    <div className="card">
           <img src={katie} alt="Katie-pic" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star-pic" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}


