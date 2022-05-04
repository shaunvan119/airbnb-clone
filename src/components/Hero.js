
import house from '../assets/house.png'


export default function Hero() {
    return (
    <section className="mid-section"> 
         <img src={house} alt="house" className="house" /> 
       <div className="heading-paragraph">
         <h1>Online Experiences</h1>
         <p>Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving home.</p>
       </div> 
    </section>
    )
}

