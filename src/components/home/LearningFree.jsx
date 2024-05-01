import React, { useEffect } from 'react'
import "../../styles/home/learingFree.css"
import Slider from "react-slick";
import Aos from "aos"
import "aos/dist/aos.css"

var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
}

function LearningFree() {

    useEffect(() => {
        Aos.init()
    })

    return (
        <section className='learningFree-container'>
            <h1>Học Lập Trình Miễn Phí</h1>
            <div className="learningFree-iframes" data-aos='fade-up'>
                <iframe width="31%" height="315" src="https://www.youtube.com/embed/YNa3pdGSwls?si=gYB168JL9cD9aRin" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="31%" height="315" src="https://www.youtube.com/embed/aS90ZNnJHwM?si=hqc7Vd7S4ZuYmSHO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="31%" height="315" src="https://www.youtube.com/embed/9Nc_vi99sD0?si=btF1Ypa194s_KuKL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default LearningFree