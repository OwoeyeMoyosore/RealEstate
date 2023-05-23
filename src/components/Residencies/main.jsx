import React from 'react'
import "./style.css"
import {Swiper, SwiperSlide, useSwiper  } from "swiper/react"
import "swiper/css"
import allData from "../../utils/slider.json"
import { SliderSettings } from '../../utils/common'

const Residencies = () => {
  return (
    <section className="residences-wrapper">
       <div className="paddings innerWidth residencies-container">
        <div className="flexColStart residencies-head">
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...SliderSettings}>
            <SliderButtons />
            {allData.map((residencies,index) => (
                <SwiperSlide key={index}>
                    <div className="residencies-card flexColStart">
                        <div className="flexColStart">
                        <img src={residencies?.image} alt="image" />
                        <span className="secondaryText residencies-price">
                            <span style={{color: "orange"}}>$</span>
                            <span>{residencies?.price}</span>
                        </span>

                        <span className='primaryText'>{residencies?.name}</span>
                        <span className='secondaryText'>{residencies?.detail}</span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
       </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper()
    return (
        <div className="residencies-buttons flexCenter">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}


