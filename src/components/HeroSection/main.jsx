import CountUp from "react-countup"
import "./style.css"
import {HiLocationMarker} from "react-icons/hi"

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
        <div className=" hero-container paddings innerWidth flexCenter">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <h1>Discover <br/> Most Suitable <br/> Property</h1>
                </div>

                <div className="flexColStart hero-description">
                    <span>Find a variety of properties that suit you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="search flexCenter">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" name="" id="" />
                    <button className="button">Search</button>
                </div>

                <div className="stats flexCenter">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={3800} end={4000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span>Premium Products</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={5}/>
                            <span>+</span>
                        </span>
                        <span>Happy Customers</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp  end={28}/>
                            <span>+</span>
                        </span>
                        <span>Award Winning</span>
                    </div>
                </div>
            </div>


            <div className="hero-right flexCenter">
                <div className="image-container">
                    <img src='./hero-image.png' alt='hero-right' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection