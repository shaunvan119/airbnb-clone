import katie from '../assets/katie.png'
import star from '../assets/star.png'


export default function Card() {
    return (
    <div className="card">
           <img src={katie} alt="Katie-pic" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="star-pic" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}


